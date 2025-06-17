const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!,hello guys");
});
app.get('/debug/cart', async (req, res) => {
  const cart = await require('./models/Cart').findOne();
  res.json(cart);
});

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
