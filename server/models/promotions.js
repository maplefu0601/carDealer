const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'promotions';

let Promotions = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
    },
    createdBy: {
      type: String,
    },
    createdOn: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, Promotions);
