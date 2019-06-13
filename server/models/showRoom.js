const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'showRoom';

let ShowRoom = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, ShowRoom);
