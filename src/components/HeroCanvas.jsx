import React from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import './HeroCanvas.css';

export default function HeroCanvas() {
  const { data } = useAppContext();
  
  return (
    <div className="hero">
      <div className="hero__background" />
      <div className="hero__vignette" />

      <div className="hero__content">
        <div className="hero-badge">
          <span>{data.hero.badgeIcon}</span>
          <EditableText value={data.hero.badgeText} dataPath={['hero', 'badgeText']} />
        </div>

        <p className="section-label">
          <EditableText value={data.hero.label} dataPath={['hero', 'label']} />
        </p>
        <h1 className="hero__title">
          <EditableText value={data.hero.titleLine1} dataPath={['hero', 'titleLine1']} /><br />
          <span className="gradient-text">
            <EditableText value={data.hero.titleLine2} dataPath={['hero', 'titleLine2']} />
          </span>
        </h1>
        <p className="hero__sub">
          <EditableText value={data.hero.subtitle} dataPath={['hero', 'subtitle']} />
        </p>

        <div className="hero__actions">
          <a href={data.hero.primaryCtaLink} className="btn btn-gradient hero__cta">
            <EditableText value={data.hero.primaryCtaText} dataPath={['hero', 'primaryCtaText']} />
          </a>
          <a href={data.hero.secondaryCtaLink} className="btn btn-ghost">
            <EditableText value={data.hero.secondaryCtaText} dataPath={['hero', 'secondaryCtaText']} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-wheel">
          <span className="scroll-wheel__dot" />
        </div>
      </div>
    </div>
  );
}
