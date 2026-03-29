MASTER PROMPT — Awwwards-Level React Scrollytelling Developer Portfolio

ACT AS:  
A world-class Creative Frontend Developer (Awwwards-level) specializing in cinematic scroll-driven storytelling built with React, HTML5 Canvas, and modern JavaScript.  

Output: Fully working React project codebase.

🎯 PROJECT GOAL
Build a premium scrollytelling developer portfolio that visualizes the developer’s evolution:
Beginner → Freelancer → Expert.  

The hero features a scroll-linked image sequence animation rendered on a <canvas> using requestAnimationFrame + scroll progress mapping.  
After the cinematic hero, create a full portfolio site (About, Process, Portfolio, Testimonials, Blog, Contact, Footer).  

No animations libraries (no GSAP, no Framer Motion, no Tailwind).

🧱 TECH STACK
• React (functional components + hooks)
• JavaScript (ES6+)
• HTML5 Canvas
• CSS Modules or plain CSS
• No CSS frameworks

📁 PROJECT STRUCTURE

``
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroCanvas.jsx
│   ├── About.jsx
│   ├── WorkProcess.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── styles/
│   └── main.css
│
│
├── App.jsx
└── main.jsx
`

🎨 DESIGN SYSTEM

Colors:
• Background: #0F172A
• Headings: #D4AF37 (Gold)
• Body text: #CBD5E1
• Muted text: #94A3B8
• Accent Gradient: linear-gradient(135deg, #D4AF37, #8B5CF6)

Style:
• Dark premium + luxury
• Glassmorphism cards  
• Soft glows and subtle shadows  
• Smooth scroll, subtle transitions, and hover effects

🖼️ HERO (SCROLLYTELLING CANVAS)

Structure:
• Full-screen hero section
• Centered or split layout
• Strong headline introducing developer identity


Behavior:
Preload ~200–300 frames.
Track loading percentage.
Use a fullscreen preloader with percentage + gold progress bar.
Fade out loader once complete.
Render first frame instantly.

Scroll Mapping Logic (in HeroCanvas.jsx):
`jsx
// Pseudocode
const scrollProgress = window.scrollY / (scrollContainerHeight - window.innerHeight);
const targetFrame = Math.floor(scrollProgress  totalFrames);
currentFrame = lerp(currentFrame, targetFrame, 0.1);
`

Use requestAnimationFrame to smoothly draw each frame on canvas.  
Optimize by skipping redraws if frame unchanged.  
Handle devicePixelRatio for crisp rendering.

✨ TEXT OVERLAYS (STAGES)

6 narrative stages displayed during scroll:

Every Developer Starts Somewhere — “A blank screen and curiosity.”  
Learning the Basics — “HTML, CSS, JavaScript foundations.”  
Building Projects — “Turning ideas into real applications.”  
Freelancing Begins — “Solving problems for real clients.”  
Scaling Skills — “Performance, architecture, and systems.”  
Crafting Experiences — “Premium digital products.” → CTA: “View My Work”

Overlay Rules:
• Alternate left/right placement
• Never center-aligned
• Use fade + translate animations on enter/exit
• Use text-shadow for readability
• Do not block subject of animation

🧭 NAVBAR

Features:
• Floating/glass navbar
• Transparent → solid on scroll
• “Hire Me” CTA button with gradient accent
• Responsive mobile collapse
• Blur + shadow for premium feel

📖 MAIN SECTIONS
ABOUT
• Short bio
• Download CV button
• Glass cards for content

WHAT I DO
• Four glass cards:  
  Web Development, UI/UX, Backend, Optimization

WORK PROCESS
• Steps: Research → Design → Develop → Deploy
• Use numbered timeline layout

PORTFOLIO
• Responsive grid
• Project images from /assets/images
• Card: project image, title, short description, and “View Project” button
• Glassmorphism + hover zoom

TESTIMONIALS
• Three glass cards with name + quote
• Subtle motion on hover (transform + shadow)

BLOG
• Three posts: title, excerpt, “Read More” button

CTA
• “Let’s Build Something Exceptional”
• Center-aligned gradient button

CONTACT
• Contact form (name, email, message)
• Display email + social icons

FOOTER
• Minimal premium dark footer
• Small gradient accent line

📱 RESPONSIVENESS
• Desktop: cinematic layout, wide overlays
• Tablet: reduced animation intensity
• Mobile:  
  - Hero text goes bottom and smaller  
  - White text + subtle shadow for readability  
  - Fixed navbar transparent with blur  
  - Adjust scroll container height

⚙️ PERFORMANCE OPTIMIZATION
• Lazy load image sequence or batch load
• Interpolate scroll frames (not redraw every pixel)
• Avoid unnecessary re-renders using useRef
• Use offscreen buffer if needed
• Debounce resize events

⚡ SMOOTH EXPERIENCE
• Smooth scroll behavior via CSS:
  `css
  html {
    scroll-behavior: smooth;
  }
  `
• Lerp animations for frame transitions
• Fade transitions on overlay text entries
• Subtle hover states on cards and links

🧮 KEY FUNCTIONS

Lerp Helper:
`js
function lerp(start, end, t) {
  return start + (end - start)  t;
}
`

Draw Frame:
`js
function drawFrame(ctx, img) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
`

Preload Images:
`js
async function preloadImages(totalFrames, path) {
  const images = [];
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = ${path}/frame-${i.toString().padStart(3, '0')}.jpg;
    await new Promise(res => (img.onload = res));
    images.push(img);
  }
  return images;
}
`

🧩 IMPLEMENTATION SUMMARY
Navbar.jsx  
   - Sticky at top, glass blur background.  
   - Transition background on scroll.

HeroCanvas.jsx  
   - Handles image sequence + scroll mapping.  
   - Preloader overlay with progress.  
   - Text overlays appear/disappear based on scroll thresholds.

About.jsx – Footer.jsx  
   - All section content in glassmorphic containers.  
   - Use gold headings and soft text-glow accents.  

App.jsx  
   - Import all components sequentially.  
   - Wrap in smooth scroll container.  

main.css  
   - Define typography, colors, and glass effects.

🧠 STYLING DETAILS (CSS EXCERPT)

`css
body {
  background-color: #0F172A;
  color: #CBD5E1;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  color: #D4AF37;
  letter-spacing: 0.05em;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
``

🚀 OUTPUT REQUIREMENTS
• Full working React project (copy-paste runnable)
• Canvas scrollytelling hero
• Preloader
• Interpolated scroll-driven animation
• Luxury dark design
• Responsive sections
• Smooth, cinematic flow
• No dependencies like GSAP, Tailwind, or Framer Motion
• Only React, HTML5 Canvas, and CSS

🧨 FINAL INSTRUCTION

Generate a complete production-ready React codebase for this Awwwards-level scrollytelling developer portfolio following all constraints and styles above.  
The final output must feel cinematic, smooth, and premium — like a digital craftsmanship showcase of a world-class creative developer.