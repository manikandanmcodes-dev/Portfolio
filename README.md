# Anti-Gravity Portfolio Theme

A modern, high-performance, and fully responsive multi-page React portfolio theme built with Vite. It features the "Anti-Gravity" design system, custom cursors, dynamic star backgrounds, and smooth scroll animations.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, React Router v7, and Vite.
- **Dynamic Animations**: Includes custom scroll animations, interactive cursors, and a dynamic star background.
- **Multi-page Routing**: Seamless navigation using React Router.
- **Fast & Optimized**: Lightning-fast hot module replacement (HMR) and optimized build configuration out of the box with Vite.
- **Responsive Design**: Mobile-first architecture ensures perfection on every device.

---

## 🎨 Live Visual Editing Mode

This theme includes a built-in **Live Edit Mode** that allows you to visually modify the content directly from your browser!

1. To enter Edit Mode, look for the **"Enter Edit Mode"** toggle button (usually pinned to the corner of the screen).
2. Click the button to activate the visual editor.
3. You can now click directly on text, headings, and even images to easily update them in real-time.
4. When you're done, simply click **"Exit Edit Mode"** to see the finalized site.

*(Note: The `isEditMode` state enables rapid prototyping. To permanently update the default content, you can modify `src/data/defaultAppData.js`.)*

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- **Node.js**: `v18.0.0` or higher (we recommend the latest LTS version).
- **npm**: Generally installed alongside Node.js.

---

## 🛠️ Installation & Setup

Follow these simple steps to get a local copy up and running:

1. **Clone the repository** (or download the ZIP and extract it):
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   Run the following command in the terminal to install all required packages:
   ```bash
   npm install
   ```

3. **Start the development server**:
   Fire up the local dev environment:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to the URL provided in the terminal (usually `http://localhost:5173/`) to see the application running.

---

## 💻 Available Scripts

In the project directory, you can run the following standard scripts:

- **`npm run dev`**
  Runs the app in the development mode. The page will reload if you make edits, and you will also see any lint errors in the console.

- **`npm run build`**
  Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

- **`npm run preview`**
  Boots up a local static web server that serves the files from the `dist` folder, allowing you to preview the production build locally before deploying.

- **`npm run lint`**
  Runs ESLint to find and optionally fix problems in your JavaScript/JSX code.

---

## 📂 Project Structure

A quick glance at the typical directory structure of this project:

```text
├── public/               # Static assets that don't need compilation
├── src/                  # Application source code
│   ├── assets/           # Images, fonts, and global CSS
│   ├── components/       # Reusable React components (e.g., Cursor, Stars, etc.)
│   ├── pages/            # Page-level components
│   ├── App.jsx           # Main application routing and layout
│   └── main.jsx          # React initialization and DOM rendering
├── .gitignore            # Files to ignore in Git version control
├── eslint.config.js      # Base ESLint configuration file
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── vite.config.js        # Vite bundler configuration
```

---

## 🧰 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/)

---

## 🤝 Support & Customization

If you need help customizing the theme or run into any issues, please feel free to ask or consult the [React documentation](https://react.dev/) and [Vite documentation](https://vitejs.dev/).
