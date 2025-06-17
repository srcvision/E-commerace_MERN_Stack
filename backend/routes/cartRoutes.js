const express = require('express');
const router = express.Router();
const {
    addToCart,
    getCartItems,
    updateCartItem,
    deleteCartItem  
} = require('../controllers/cartControllers');

router.post('/', addToCart);
router.get('/', getCartItems);
router.put('/', updateCartItem);
router.delete('/:productId', deleteCartItem);

module.exports = router;