const express = require('express');
const { createOrder, fetchOrderByUser, updateOrder, deleteOrder, fetchAllOrders } = require('../controllers/Order');

const router = express.Router();

// Products is already added in base path
router.get('/user/:userId', fetchOrderByUser)
      .post('/', createOrder)
      .patch('/:id', updateOrder)
      .delete('/:id', deleteOrder)
      .get('/', fetchAllOrders)


exports.router = router;  