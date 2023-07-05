const express = require('express');
const router = express.Router();

const labelController = require("../controllers/labels.controller")

router.route('/')
  .get(labelController.getAllLabels)
//   .post()


module.exports = router;