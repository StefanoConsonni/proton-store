import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();
connectDB(); // Connect to MongoDB
const PORT = process.env.PORT || 8001;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
