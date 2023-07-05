const express = require('express');
const router = express.Router();

const categoryController = require("../controllers/category.controller")

router.route('/')
  .get(categoryController.getCategories)
//   .post()


module.exports = router;