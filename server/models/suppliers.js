const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'suppliers';

let Suppliers = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    createdBy: { type: String, default: 'admin' },
    createdOn: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, Suppliers);
