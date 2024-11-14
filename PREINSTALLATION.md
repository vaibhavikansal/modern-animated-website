
# Pre-installation Guide for Sidcup Interactive Web Experience

Before you can run the Sidcup Interactive Web Experience project, please follow these pre-installation steps to set up your environment:

## 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

## 2. Install Node.js and npm
Ensure you have [Node.js](https://nodejs.org/en/download/) installed, as it includes npm. Verify installation:
```bash
node -v
npm -v
```

## 3. Install Project Dependencies
Install dependencies for animations and smooth scrolling:
```bash
npm install locomotive-scroll gsap
```

## 4. Set Up CSS and JavaScript Libraries
Make sure to include the following in your HTML:
- Locomotive Scroll for smooth scrolling animations
- GSAP with ScrollTrigger for interactive animations

Add these links in your `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

## 5. Run the Project
Open the `index.html` file in a browser to view the project. Use `Live Server` in VSCode for automatic reloading on save.
