
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const VideoSchema = new Schema({
  src: { type: String, default: '', trim: true, required: true },
  title: { type: String, default: '', trim: true },
  description: { type: String, default: '', trim: true },
  episodeId: { type: String, default: '', trim: true, required: true, }
});

module.exports = mongoose.model('video', VideoSchema);