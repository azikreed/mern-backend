const express = require('express');
const {requireSignin, userMiddleware} = require('../common-middleware');
const { addOrder, getOrders } = require('../controller/order');
const router = express.Router();

router.post('/addOrder', requireSignin, userMiddleware, addOrder);
router.get('/getOrders', requireSignin, userMiddleware, getOrders);

module.exports = router;