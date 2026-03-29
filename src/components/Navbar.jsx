import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import './Navbar.css';

export default function Navbar() {
  const { data } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="glow-dot" />
          <EditableText value={data.global.siteName} dataPath={['global', 'siteName']} />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {data.navigation.map((link, idx) => (
            <li key={link.id}>
              <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                <EditableText value={link.label} dataPath={['navigation', idx, 'label']} />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-gradient navbar__cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
