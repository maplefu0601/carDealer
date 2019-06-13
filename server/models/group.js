const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Group = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
      default: Date.now,
    },
    end: {
      type: Date,
      required: true,
      default: Date.now + 10 * 24 * 60 * 60 * 1000,
    },
    discount: {
      type: Number,
      required: true,
    },
    members: {
      type: Array,
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
      enum: ['active', 'removed'],
    },
  },
  {
    collection: 'group',
  },
);

module.exports = mongoose.model('Group', Group);
