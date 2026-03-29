import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import { ArrayItemOverlay, ArrayAddBtn } from './ArrayControls';
import './Portfolio.css';

export default function Portfolio() {
  const { data } = useAppContext();
  const { portfolio } = data;
  const [active, setActive] = useState(null);

  return (
    <section className="section portfolio reveal" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <EditableText value={portfolio.label} dataPath={['portfolio', 'label']} />
          </span>
          <h2>
            <EditableText value={portfolio.title} dataPath={['portfolio', 'title']} />
          </h2>
          <div className="divider" />
          <p>
            <EditableText value={portfolio.desc} dataPath={['portfolio', 'desc']} />
          </p>
        </div>

        <div className="portfolio__grid">
          {portfolio.projects.map((proj, pIdx) => (
            <ArrayItemOverlay key={proj.id} dataPath={['portfolio', 'projects']} index={pIdx} currentArray={portfolio.projects}>
              <div
                className={`glass-card portfolio__card ${active === proj.id ? 'portfolio__card--active' : ''}`}
                style={{ '--accent': proj.color }}
                onMouseEnter={() => setActive(proj.id)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="portfolio__thumb">
                  <div className="portfolio__thumb-inner" style={{ background: `linear-gradient(135deg, ${proj.color}22, ${proj.color}08)` }}>
                    <EditableImage 
                      src={proj.image} 
                      dataPath={['portfolio', 'projects', pIdx, 'image']}
                      fallback={
                        <span className="portfolio__num">
                          <EditableText value={proj.displayId} dataPath={['portfolio', 'projects', pIdx, 'displayId']} />
                        </span>
                      }
                    />
                  </div>
                </div>
                <div className="portfolio__info">
                  <h3><EditableText value={proj.title} dataPath={['portfolio', 'projects', pIdx, 'title']} /></h3>
                  <p><EditableText value={proj.desc} dataPath={['portfolio', 'projects', pIdx, 'desc']} /></p>
                  <div className="portfolio__tags">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="portfolio__tag">
                        <EditableText value={t} dataPath={['portfolio', 'projects', pIdx, 'tags', tIdx]} />
                      </span>
                    ))}
                  </div>
                  <Link to={`/project/${proj.id}`} className="btn btn-ghost portfolio__btn">View Project →</Link>
                </div>
              </div>
            </ArrayItemOverlay>

          ))}
        </div>
        <ArrayAddBtn 
          dataPath={['portfolio', 'projects']} 
          defaultItem={{ displayId: '00', title: 'New Entry', desc: 'Description goes here', tags: ['Web'], color: '#00d4ff' }} 
        />
      </div>
    </section>
  );
}
