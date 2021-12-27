const express = require('express');
const { addItemToCart, getCartItems, addToCart, removeCartItems } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);
router.get('/user/getCartItems', requireSignin, userMiddleware, getCartItems);
router.post('/user/cart/removeItem', requireSignin, userMiddleware, removeCartItems);


module.exports = router;