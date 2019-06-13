const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'carMakes';

let CarMakes = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    models: {
      type: Array,
    },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, CarMakes);
