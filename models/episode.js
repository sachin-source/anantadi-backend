
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * label Schema
 */

const EpisodeSchema = new Schema({
  name: { type: String, default: '', trim: true },
  episode: { type: String, default: '', trim: true, required: true, },
  productId: { type: String, default: '', trim: true, required: true, }
});

module.exports = mongoose.model('episode', EpisodeSchema);