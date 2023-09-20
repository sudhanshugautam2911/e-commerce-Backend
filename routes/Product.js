const express = require('express');
const { createProduct, fetchAllProducts } = require('../controllers/Product');

const router = express.Router();

// Products is already added in base path
router.post('/', createProduct)
      .get('/', fetchAllProducts);


exports.router = router;