const express = require('express');
const { fetchBrands, createBrand } = require('../controllers/Brand');
    
const router = express.Router();

// brands is already added in the base path
router.get('/', fetchBrands).post('/', createBrand)

exports.router = router;