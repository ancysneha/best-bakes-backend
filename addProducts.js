// backend/addProducts.js
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    // OPTIONAL: Remove existing products (uncomment if you want clean slate)
    // await Product.deleteMany();

    const products = [
      {
        name: "Chocolate Truffle Cake",
        price: 1999,
        image: "assets/image/cake-1.jpg",
        description: "Rich chocolate sponge with dark truffle ganache"
      },
      {
        name: "Red Velvet Delight",
        price: 2299,
        image: "assets/image/cake-2.jpg",
        description: "Classic red velvet with cream cheese frosting"
      },
      {
        name: "Fresh Fruit Cream",
        price: 1499,
        image: "assets/image/cake-3.jpg",
        description: "Light sponge layered with whipped cream & fresh fruits"
      }
    ];

    // insert many but avoid duplicates on repeated runs if you used deleteMany above
    await Product.insertMany(products);
    console.log("Products added");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
