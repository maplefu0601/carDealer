const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserHistory = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    event: {
      type: String,
    },
    eventTime: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: Object,
    },
  },
  {
    collection: 'userHistory',
  },
);

module.exports = mongoose.model('UserHistory', UserHistory);
