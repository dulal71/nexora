# 🛍️ E-Commerce Shop

A modern full-stack e-commerce web application built with **Next.js**, **TypeScript**, **Express.js**, and **MongoDB**. The platform provides a secure shopping experience with authentication, product management, cart, wishlist, online payments, and an admin dashboard.

---

## 🚀 Live Demo

* **Frontend:** https://your-frontend-url.vercel.app
* **Backend:** https://your-backend-url.onrender.com

---

## 📂 GitHub Repository

* **Client:** https://github.com/your-username/client-repository
* **Server:** https://github.com/your-username/server-repository

---

# ✨ Features

## 👤 Authentication

* Email & Password Authentication
* Google Authentication
* Secure authentication using Better Auth
* Protected Routes
* User Session Management

## 🔒 Security

* Protected REST API using authentication tokens
* Secure user sessions with Better Auth
* MongoDB session storage for authentication
* Role-based authorization (Admin & User)
* Protected routes for authenticated users
* Environment variables managed with dotenv
* Secure Stripe payment integration


## 🛍️ Product Features

* Browse Products
* Product Details Page
* Search Products
* Filter by Category
* Sort Products
* Responsive Product Grid
* Custom Product Viewing Experience

## ❤️ Wishlist

* Add Products to Wishlist
* Remove Products from Wishlist
* View Wishlist Items

## 🛒 Shopping Cart

* Add to Cart
* Remove from Cart
* Update Quantity
* View Cart Summary

## 💳 Online Payment

* Secure Stripe Checkout
* Order Confirmation
* Protected Purchase Flow

## 👨‍💼 Admin Dashboard

* Dashboard Overview
* Add Products
* Edit Products
* Delete Products
* Customer Management
* Website Settings Management

## 📱 UI & UX

* Fully Responsive Design
* Modern User Interface
* Smooth Animations with Framer Motion
* Product Slider using Swiper
* Beautiful Components using Hero UI

---

# 🛠️ Tech Stack

## Frontend

* Next.js
* TypeScript
* React
* Tailwind CSS
* Hero UI
* Framer Motion
* Swiper
* React Icons

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Better Auth
* Stripe
* dotenv

---

# 📦 Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/client.git
git clone https://github.com/your-username/server.git
```

---

## Client Setup

```bash
cd client

npm install

npm run dev
```

---

## Server Setup

```bash
cd server

npm install

npm run dev
```

---

# 🔐 Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_API_URL=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

NEXT_PUBLIC_AUTH_URL=
```

### Server (.env)

```env
PORT=

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

STRIPE_SECRET_KEY=
```

---

# 📁 Project Structure

```
client/
│
├── app/
├── components/
├── hooks/
├── services/
├── providers/
├── types/
├── utils/
└── public/

server/
│
├── routes/
├── middleware/
├── controllers/
├── database/
├── utils/
└── server.ts
```

---

# 🔒 Protected Pages

* Product Details
* Cart
* Wishlist
* Checkout
* Dashboard
* Admin Pages

Only authenticated users can access these pages.

---

# 🎯 Future Improvements

* Product Reviews & Ratings
* Coupon System
* Order History
* Inventory Management
* Email Notifications
* Sales Analytics
* Dark Mode
* Multi-language Support

---


# 👨‍💻 Author

**Dulal Ahmed**

Frontend Developer

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile
* Portfolio: https://your-portfolio.vercel.app

---

## ⭐ Support

If you like this project, don't forget to **Star ⭐ the repository**.
