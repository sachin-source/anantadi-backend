
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const clipSchema = new Schema({
  timestamp: { type: String, default: '', trim: true, required: true },
  // label: { type: String, default: '', trim: true, required: true },
  labelId: { type: String, default: '', trim: true, required: true },
  videoId: { type: String, default: '', trim: true, required: true }, 
});

module.exports = mongoose.model('clip', clipSchema);