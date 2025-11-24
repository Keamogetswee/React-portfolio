# 🌟 Developer Portfolio

## Introduction  
A modern, animated, responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Three.js**.  
This site showcases who I am, what I’ve built, and how to contact me — presented through smooth animations, interactive components, and clean UI design.

---

## 🚀 Features

### 🎨 Modern UI & Beautiful Animations
- Smooth section transitions powered by **Framer Motion**  
- Clean and modern aesthetic with **Tailwind CSS**  
- Dynamic components such as **Highlights**, **Experience Timeline**, **Works**, and more  

### 🌌 3D Graphics
- Stunning 3D elements rendered with **Three.js**  
- Interactive **Earth model** in the Contact section  
- Animated starfield via **StarsCanvas**  

### 📬 Functional Contact Form
- Email form powered by **EmailJS**  
- Environment variables stored securely using `.env`  
- Includes loading states and error handling  

### 🧩 Modular Architecture
- Clean, reusable components  
- Constants separated from UI  
- Easy to add new projects, skills, and highlights  

---

## 🛠️ Tech Stack

### Frontend
- React + Vite  
- Tailwind CSS  
- JavaScript (ES6+)  

### Animations
- Framer Motion  
- React Three Fiber  
- Drei  

### 3D
- Three.js  

### Email Integration
- EmailJS browser SDK  

---

## 🤸 Quick Start

Follow these steps to set up the project locally.

---

### **Prerequisites**

Make sure you have these installed:

- **Git**
- **Node.js**
- **npm**

---

### **Cloning the Repository**

```bash
git clone git@github.com:adrianhajdin/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio
npm install

Create a .env file in the root of your project and add:
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id

## Running the Project
npm run dev
Open your browser at:
http://localhost:5173
