const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'carInfo';

let CarInfo = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
    },
    year: {
      type: Number,
    },
    description: {
      type: String,
    },
    kilometers: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['used', 'new'],
    },
    bodyType: {
      type: String,
    },
    engine: {
      type: String,
    },
    transmission: {
      type: String,
    },
    driveTrain: {
      type: String,
    },
    stockNumber: {
      type: String,
    },
    colorInt: {
      type: String,
    },
    colorExt: {
      type: String,
    },
    passengers: {
      type: Number,
    },
    doors: {
      type: Number,
    },
    fuelType: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: {
      type: Array,
    },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, CarInfo);
