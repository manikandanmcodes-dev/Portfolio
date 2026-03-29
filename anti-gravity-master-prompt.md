# MASTER PROMPT 2.0 — Anti-Gravity CMS & Interactive UI Engine

## 🎯 PROJECT GOAL
Transform a static React portfolio into a fully dynamic, state-driven application with a visual "Edit Mode" and an Awwwards-level interactive UI. The goal is to build an in-browser CMS that writes to `localStorage` (with hot-reloading context) combined with a premium, responsive "Anti-Gravity" neon/glassmorphism design system.

## 🧱 TECH STACK
- React (Functional Components + Hooks + Context API)
- Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)
- HTML5 `<canvas>` for background effects
- Vanilla JavaScript APIs (`IntersectionObserver`, `requestAnimationFrame`, `localStorage`)
- **Strict Constraint**: NO external animation or state management libraries (No GSAP, Tailwind, Redux, or Framer Motion).

---

## 🛠️ PHASE 1: DATA-DRIVEN ARCHITECTURE (THE CMS CORE)

1. **Centralized Data Schema (`src/data/defaultAppData.js`)**
   - Extract ALL hardcoded text, arrays (skills, services, portfolio projects, testimonials), and links from the application into a single JavaScript object.
   - Example properties: `hero.title`, `about.description`, `portfolio.projects` (array of objects).

2. **State Management (`src/context/AppProvider.jsx`)**
   - Create a React Context provider that initializes state from `defaultAppData.js` but merges it with any existing data in `localStorage`.
   - Create an `updateData` function to allow deep-object updates (e.g., updating a specific array index or nested string).
   - Sync all state changes back to `localStorage` instantly.

3. **Component Refactoring**
   - Refactor every single component (Navbar, Hero, About, Portfolio, etc.) to consume data from the `useAppCtx()` custom hook instead of hardcoded strings.

---

## ✏️ PHASE 2: IN-BROWSER EDIT MODE ENGINE

1. **Global Edit Toggle**
   - Build a floating, fixed-position toggle switch in the bottom-right corner of the screen: "Enter Edit Mode".
   - State should be tracked globally in the context (`isEditMode`).

2. **Inline Text Editing (`<EditableText />`)**
   - Create a wrapper component that renders a `<span contentEditable>` when `isEditMode` is true, and normal text when false.
   - Apply a dashed neon border to editable text when hovering in Edit Mode.
   - On `blur` or `input`, dispatch the new text back to the global Context to save.

3. **Array Management UI (`<ArrayItemOverlay>` & `<ArrayAddBtn>`)**
   - For all repeating lists (Projects, Skills, Services):
     - When `isEditMode` is true, wrap each card in a relative container.
     - Add absolute-positioned overlay controls to each card: **Move Up (↑)**, **Move Down (↓)**, and **Delete (🗑️)**.
     - Add a glowing **+ Add Item** button at the bottom of the grid to push a new blank/default object into the array.

---

## 🌌 PHASE 3: ANTI-GRAVITY UI & INTERACTIVITY

1. **Custom Neon Cursor (`Cursor.jsx`)**
   - Hide the default browser cursor (`body { cursor: none; }`).
   - Create a custom cursor with two elements: a solid center dot and a larger trailing ring.
   - Use `mousemove` event listeners and `requestAnimationFrame` lerping to make the ring smoothly lag behind the dot.
   - Apply `mix-blend-mode: screen` and neon box-shadow glows.

2. **Interactive Background Canvas (`StarsCanvas.jsx`)**
   - Implement a fixed `<canvas>` at `z-index: -1` spanning the full window.
   - Draw hundreds of small glowing particles (stars) that slowly drift upwards (`y -= speed`) and twinkle (opacity sine wave).
   - Handle window resize events to redraw the canvas boundaries.

3. **Premium Design Tokens (`main.css`)**
   - Base background: Deep dark blue/black (`#050508`).
   - Neon Palette: Cyan (`#00f0ff`), Purple (`#bc13fe`), Blue (`#0047ff`), Pink (`#ff007f`).
   - Typography: 'Orbitron' for headings, 'Exo 2' for body text.
   - Class Utilities: `.glass-card`, `.gradient-text`, `.neon-border`.

4. **Component-Level Animations & Hover States**
   - **Glass Cards**: `background: rgba(10, 10, 15, 0.4)`, `backdrop-filter: blur(12px)`.
   - **Hover Effects**: Lift cards on hover (`transform: translateY(-8px)`), add an inner neon glow, and rotate any internal icons by 5 to 10 degrees.
   - **Floating**: Add an infinite flowing CSS animation (`@keyframes floatY`) to hero elements and feature cards to make them breathe.

5. **Scroll Reveal Engine (`useScrollReveal.js`)**
   - Build a custom hook utilizing `IntersectionObserver`.
   - Target any DOM element with a `.reveal` class.
   - When the element intersects the viewport (e.g., 10% threshold), add a `.visible` class.
   - CSS: `.reveal` starts at `opacity: 0; transform: translateY(40px);`. `.reveal.visible` transitions to `opacity: 1; transform: translateY(0);`. Apply this to section headers, cards, and paragraphs.

---

## 📱 PHASE 4: RESPONSIVENESS

1. **Mobile Layout Constraints**
   - Collapse the Navbar into a hamburger menu with a frosted-glass fullscreen drawer.
   - Ensure the custom cursor is hidden on touch devices (`@media (hover: none)`).
   - Convert all grid layouts (Portfolio, Process, Testimonials) to 1 column on mobile (`max-width: 768px`) and 2 columns on tablet.
   - Size down typography: Hero headings drop from `4rem` to `2.5rem`, padding reduces dynamically.
   - The Edit Mode toggle should remain accessible but shrink to an icon-only floating action button on mobile screens.

---

## 🚀 FINAL INSTRUCTION
Generate the complete, production-ready React codebase fulfilling these requirements. The app must function identically to a high-end CMS portfolio: instantly editable, permanently saved via localStorage, deeply interactive via canvas and custom cursors, and perfectly responsive, all while achieving a premium "Anti-Gravity" aesthetic.
