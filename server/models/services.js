const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'services';

let Services = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: String,
      default: 'admin',
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

module.exports = mongoose.model(collection, Services);
