const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema(
  {
    content: {
      type: String,
      required: true,
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
    collection: 'event',
  },
);

module.exports = mongoose.model('Event', Event);
