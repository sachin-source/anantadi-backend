const express = require('express');
const router = express.Router();

const clipController = require("../controllers/clip.controller")

router.route('/')
  .get(clipController.getAllClips)
//   .post()


module.exports = router;