const express = require('express');
const router = express.Router();

const episodeController = require("../controllers/episode.controller")

router.route('/')
  .get(episodeController.getAllEpisodes)
//   .post()


module.exports = router;