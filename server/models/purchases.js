const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'purchases';

let Purchases = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    brand: { type: String },
    model: { type: String },
    year: { type: Number },
    price: { type: Number },
    purchasedOn: { type: Date, default: Date.now },
    purchasedBy: { type: String, default: 'Carlos Fuson' },
    createdBy: { type: String },
    createdOn: { type: Date, default: Date.now },
    auditedBy: { type: String },
    auditedOn: { type: Date, default: Date.now },
    supplierId: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, Purchases);
