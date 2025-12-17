# 🍰 Best Bakes – Backend API

This is the backend service for the Best Bakes bakery website.  
It provides REST APIs for product data and connects to MongoDB Atlas.

## 🔗 Live API
👉 https://best-bakes-backend.onrender.com

## 📌 API Endpoints

### Get all products
GET /api/products

### Get product by ID
GET /api/products/:id

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Deployment)

  ## 📦 Database

- MongoDB Atlas
- Product schema includes:
- name
- description
- price
- image

## ⚙️ Environment Variables
Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
