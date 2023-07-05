const express = require('express');
const router = express.Router();

const videoController = require("../controllers/video.controller")

router.route('/')
  .get(videoController.getallVideos)
//   .post()


module.exports = router;