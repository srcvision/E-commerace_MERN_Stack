const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

const cartSchema = new mongoose.Schema({
    items: [cartItemSchema]
},{timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;