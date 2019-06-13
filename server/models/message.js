const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema(
  {
    message: {
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
    collection: 'message',
  },
);

module.exports = mongoose.model('Message', Message);
