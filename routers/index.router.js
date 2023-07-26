const express = require('express');
const router = express.Router();

const categoryRoutes = require("./category.router");
const productRoutes = require("./product.router");
const episodeRoutes = require("./episode.router");
const videoRoutes = require("./video.router");
const labelRoutes = require("./label.router");
const clipRoutes = require("./clip.router");

// mount label routes at /label
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/episode', episodeRoutes);
router.use('/video', videoRoutes);
router.use('/label', labelRoutes);
router.use('/clip', clipRoutes);

// router.get('/*', (req, res) =>
//     res.send('OK')
// );
module.exports = router;