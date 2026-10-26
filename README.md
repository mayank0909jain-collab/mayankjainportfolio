# Mayank Jain — Developer Portfolio

A production-quality, animated personal portfolio website for **Mayank Jain** (Machine Learning Developer, MERN Stack Developer, and Generative AI Enthusiast). Built with **React.js**, **Vite**, **Tailwind CSS**, and **Motion for React** (`motion/react`).

![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TailwindCSS%20%7C%20Motion-5B7CFF)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10B981)

---

## 🌟 Key Features & Highlights

- **Modern Futuristic Theme**: Dark slate palette (`#08090D`), vibrant electric blue (`#5B7CFF`) and violet (`#A855F7`) accents, glassmorphic panels, and glowing borders.
- **Motion for React Animations**:
  - Full-screen Hero with staggered word reveal (`AnimatedText`), rotating titles (`AnimatePresence`), floating technology badges, and mouse-follow glow.
  - Scroll progress bar at the top of the viewport (`useScroll` and `useSpring`).
  - Staggered scroll-triggered reveals (`whileInView`, `viewport={{ once: true }}`).
  - Interactive skill category cards with clean technology icons.
  - Interactive Project visual displays (MERN bookstore UI preview, Car price regression scatter plot with $R^2$ and RMSE scores, LangChain RAG pipeline flow with medical disclaimer, and CNN potato leaf disease classifier).
  - Education timeline and beyond-the-code sports & hackathon cards.
  - Contact section with copyable email, validation, and transparent client-side mailto launcher.
- **Accessibility & Performance**:
  - Strict adherence to `prefers-reduced-motion` in both CSS and Motion for React hooks (`useReducedMotion`).
  - Semantic HTML structure and accessible color contrast.
- **100% Authentic Information**:
  - No fabricated statistics, percentages, years of experience, or fake URLs.
  - Factual data from resume: B.Tech in CSE (BGIEM / RGPV MP, 2024–2028, CGPA: 7.42), U-17 Division Cricketer, Smart India Hackathon Participant.

---

## 📁 Project Structure

```text
an_project/
├── public/
│   ├── assets/
│   │   └── Mayank_Jain_Resume.pdf    <-- Place your resume PDF here!
│   └── favicon.svg                    <-- Custom SVG glowing logo
├── src/
│   ├── components/
│   │   ├── About.jsx                 <-- 2-column introduction & info cards
│   │   ├── Achievements.jsx          <-- Cricket & SIH honors
│   │   ├── AnimatedText.jsx          <-- Staggered word/character entrance
│   │   ├── BackgroundElements.jsx    <-- Ambient glowing orbs & mouse-glow
│   │   ├── Contact.jsx               <-- Direct contact & transparent mailto form
│   │   ├── Education.jsx             <-- Academic timeline & RGPV details
│   │   ├── Footer.jsx                <-- Copyright, social links, back-to-top
│   │   ├── Hero.jsx                  <-- Full-screen hero with rotating titles
│   │   ├── Navbar.jsx                <-- Glassmorphism navigation & mobile menu
│   │   ├── ProjectCard.jsx           <-- Project card with tech badges
│   │   ├── Projects.jsx              <-- Category filterable project showcase
│   │   ├── ProjectVisual.jsx         <-- Visual mockups for all 4 projects
│   │   ├── ScrollProgress.jsx        <-- Top scroll progress indicator
│   │   └── TechIcon.jsx              <-- Icon mapper
│   ├── data/
│   │   └── projects.js               <-- Centralised portfolio data
│   ├── App.jsx                       <-- Main application layout
│   ├── index.css                     <-- Custom Tailwind styles & scrollbar
│   └── main.jsx                      <-- React DOM root
├── index.html                        <-- SEO meta tags & Google fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📄 Adding Your Resume PDF

The navigation and hero buttons link directly to:
`/assets/Mayank_Jain_Resume.pdf`

To activate:
1. Copy your real PDF file to:
   `public/assets/Mayank_Jain_Resume.pdf`
2. That's it! The "Download Resume" buttons on the desktop navbar, mobile drawer, and hero section will immediately serve your file.

---

## 📬 Contact & Socials

- **Email**: [mayank0909jain@gmail.com](mailto:mayank0909jain@gmail.com)
- **Phone**: +91 96853 63384
- **GitHub**: [github.com/mayank0909jain-collab](https://github.com/mayank0909jain-collab)
- **LinkedIn**: [linkedin.com/in/mayank-jain-961a0b33a](https://linkedin.com/in/mayank-jain-961a0b33a)
