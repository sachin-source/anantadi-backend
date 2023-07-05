
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const ProductSchema = new Schema({
  name: { type: String, default: '', trim: true, required: true },
  value: { type: String, default: '', trim: true, required: true, },
  categoryId: { type: String, default: '', trim: true, required: true, }
});

module.exports = mongoose.model('product', ProductSchema);