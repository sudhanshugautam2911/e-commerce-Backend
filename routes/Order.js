const express = require('express');
const { createOrder, fetchOrderByUser, updateOrder, deleteOrder } = require('../controllers/Order');

const router = express.Router();

// Products is already added in base path
router.get('/', fetchOrderByUser)
      .post('/', createOrder)
      .patch('/:id', updateOrder)
      .delete('/:id', deleteOrder)


exports.router = router;  