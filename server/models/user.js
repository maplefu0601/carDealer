const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, default: this.username },
    personalInfo: { type: Object },
    createdBy: { type: String, default: 'admin' },
    createdOn: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    lastLogin: { type: Date, default: Date.now },
  },
  {
    collection: 'user',
  },
);

module.exports = mongoose.model('User', User);
