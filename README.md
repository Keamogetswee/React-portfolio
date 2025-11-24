Introduction
A modern, animated, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.
This site showcases who I am, what I’ve built, and how to contact me — presented through smooth animations, interactive components, and clean UI design.

🚀 Features
🎨 Modern UI & Beautiful Animations

- Smooth section transitions powered by Framer Motion

- A polished aesthetic with Tailwind CSS

- Dynamic components such as Highlights, Experience Timeline, Works, and more

🌌 3D Graphics

- Stunning 3D elements rendered with Three.js

- Interactive Earth model in the Contact section

- Stars background using a custom StarsCanvas

📬 Functional Contact Form

- Fully working email form powered by EmailJS

- Environment variables managed securely using a .env file

- Error handling + loading states included

🧩 Modular Architecture

- Clean reusable components

- Constants separated from UI logic

- Easy to extend with new projects, skills, or highlights

🛠️ Tech Stack

Frontend

* React + Vite

* Tailwind CSS

* JavaScript (ES6+)

Animations

* Framer Motion

* React Three Fiber

* Drei

3D

* Three.js

Email Integration

* EmailJS browser SDK

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone git@github.com:adrianhajdin/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the EmailJS website.

Running the Project

npm run dev
Open http://localhost:5173 in your browser to view the project.