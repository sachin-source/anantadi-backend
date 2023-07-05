
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const labelSchema = new Schema({
  label: { type: String, default: '', trim: true, required: true },
  category: { type: String, default: '', trim: true, required: true },
  videoId: { type: String, default: '', trim: true, required: true },
});

module.exports = mongoose.model('label', labelSchema);