'use strict';

/**
 * Expose
 */

const port = process.env.PORT || 3006;

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://localhost/anantadi',
  port
};