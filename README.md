# Discount PRO 🧾

**Live Site:** [https://vengeful-pencil.surge.sh](https://vengeful-pencil.surge.sh/)

## 📌 Project Purpose

Discount PRO is a coupon collecting application built as part of a programming assignment. It helps users discover brand-specific discount coupons, manage their profiles, and update user information securely using Firebase Authentication.

---

## 🚀 Key Features

- 🔐 **Authentication**
  - Email/Password sign up and login
  - Google Sign-In
  - Protected (private) routes

- 🏷️ **Brands & Coupons**
  - Dynamic brand and coupon data loading
  - Brand-wise coupon listing with details like expiry, conditions, etc.

- 🙍 **User Profile**
  - View user photo, name, and email
  - Update profile photo and display name
  - Personalized welcome message and UI

- ❌ **Error Handling**
  - Custom 404 page for invalid routes

- 💻 **Responsive Design**
  - Fully responsive for mobile, tablet, and desktop
  - Hamburger menu for smaller screens

---

## ⚙️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **React Router DOM**
- **Firebase Authentication**
- **React Icons**
- **React Hot Toast**
- **Surge (for deployment)**

---

## 📦 NPM Packages Used

- `react-router-dom`
- `firebase`
- `react-icons`
- `react-hot-toast`
- `daisyui`
- `tailwindcss`

---

## 🚀 Deployment

This app is deployed using [Surge](https://surge.sh). To deploy:

```bash
npm run build
cd dist
surge
