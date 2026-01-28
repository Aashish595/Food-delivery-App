# 🍽️ Food Delivery Web Application (Frontend)

A responsive and modern food delivery web application built using React and Tailwind CSS. The application allows users to browse food items, add them to cart, and securely place orders using **Stripe payment integration**, while admins manage food items through a connected admin panel.

## 🚀 Live Demo
👉 https://food-delivery-frontend-tsqv.onrender.com/

---

## ✨ Features

### 👤 User Side
- Browse food items by categories
- View detailed food descriptions and images
- Add items to cart and place orders
- Secure online payments using **Stripe**
- Mobile-first responsive UI for all devices

### 🛠️ Admin Panel
- Secure login for admins
- Add, update, and delete food items
- Upload food images
- View and manage customer orders

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vite

---

## 📦 NPM Packages

```txt
react
react-dom
react-router-dom
axios
tailwindcss

---
Project Setup
npm install
npm run dev

---

## ✅ 2. Backend README (`/server/README.md`)

```md
# 🍔 Food Delivery Web Application (Backend)

This backend powers the Food Delivery Web Application, providing APIs for food management, authentication, image uploads, and order handling.

---

## 🔥 Features
- REST APIs for food items and orders
- Admin authentication
- Secure Stripe payment handling
- Image upload using Cloudinary
- MongoDB-based scalable data storage
- Robust error handling

---

## 🧰 Tech Stack

### Backend
- Node.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe
- Multer
- Cloudinary
- dotenv
- CORS
- Body-Parser

---

## 📦 NPM Packages

```txt
express
mongoose
cors
dotenv
multer
cloudinary
stripe
body-parser
nodemon

--
npm install
npm run dev

--
Environment Variables (.env)

PORT=5000
MONGO_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

