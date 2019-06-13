const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'contactSales';

let ContactSales = new Schema(
  {
    from: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, ContactSales);
