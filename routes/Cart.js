const express = require('express');
const { addToCart, fetchCartByUser, updateCart, deleteFromCart } = require('../controllers/Cart');

const router = express.Router();

// Products is already added in base path
router.get('/', fetchCartByUser)
      .post('/', addToCart)
      .patch('/:id', updateCart)
      .delete('/:id', deleteFromCart)


exports.router = router;  