const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collection = 'sales';

let Sales = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, default: this.username },
    createdBy: { type: String, default: 'admin' },
    createdOn: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    lastLogin: { type: Date, default: Date.now },
  },
  {
    collection: collection,
  },
);

module.exports = mongoose.model(collection, Sales);
