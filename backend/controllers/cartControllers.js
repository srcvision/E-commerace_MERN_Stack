const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [{ productId, quantity: quantity || 1 }] });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );
      if (existingItem) {
        // Item exists, update quantity
        existingItem.quantity += quantity || 1;
      } else {
        // Item does not exist, add new item
        cart.items.push({ productId, quantity: quantity || 1 });
      }
    }
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error creating cart", error });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.productId');

    if (!cart) return res.status(200).json({ items: [] });

    // Filter out items where product no longer exists
    cart.items = cart.items.filter(item => item.productId !== null);

    // Save filtered cart (optional)
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in getCartItems:", error);
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

exports.updateCartItem = async (req, res) => {
  console.log("PUT /api/cart hit"); // 👈 Add this
  const { productId, quantity } = req.body;
  console.log({ productId, quantity });
  try {
    const cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cleanProductId = productId?.trim();
    const item = cart.items.find((item) => {
      const dbId = item.productId._id?.toString() || item.productId.toString();
      return dbId === cleanProductId;
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ message: "Error updating cart", error });
  }
};

exports.deleteCartItem = async (req, res) => {
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in [function name]:", error); // Example
    res.status(500).json({ message: "Error message", error });
  }
};
