import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import StarsCanvas from './components/StarsCanvas';
import EditToggle from './components/EditToggle';
import useScrollReveal from './hooks/useScrollReveal';
import ScrollToTop from './components/ScrollToTop';

/* Pages */
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import BlogDetails from './components/BlogDetails';

export default function App() {
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <Cursor />
      <StarsCanvas />
      {import.meta.env.DEV && <EditToggle />}
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
