
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const CategorySchema = new Schema({
  name: { type: String, default: '', trim: true, required: true },
  value: { type: String, default: '', trim: true, required: true, unique : true }
});

module.exports = mongoose.model('category', CategorySchema);