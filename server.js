const contactRoutes = require("./routes/contactRoutes");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes"); // ✅ ONLY ONCE

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
// Root route (health check)
app.get("/", (req, res) => {
  res.send("🚀 Best Bakes Backend API is running");
});


app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

