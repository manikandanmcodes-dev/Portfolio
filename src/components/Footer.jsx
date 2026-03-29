import React from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import './Footer.css';

export default function Footer() {
  const { data } = useAppContext();
  
  return (
    <footer className="footer reveal">
      <div className="footer__gradient-line" />
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="glow-dot" />
              <EditableText value={data.global.siteName} dataPath={['global', 'siteName']} />
            </a>
            <p className="footer__tagline" style={{ whiteSpace: 'pre-line' }}>
              <EditableText value={data.global.siteTagline} dataPath={['global', 'siteTagline']} />
            </p>
          </div>

          <nav className="footer__nav">
            {data.navigation.map((l, idx) => (
              <a key={l.id} href={l.href} className="footer__link">
                <EditableText value={l.label} dataPath={['navigation', idx, 'label']} />
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© <EditableText value={data.global.copyrightYear} dataPath={['global', 'copyrightYear']} /> <EditableText value={data.global.siteName} dataPath={['global', 'siteName']} />. All rights reserved.</span>
          <span className="footer__credit">
            <EditableText value={data.global.credit} dataPath={['global', 'credit']} />
          </span>
        </div>
      </div>
    </footer>
  );
}
