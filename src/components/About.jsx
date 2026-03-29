import React from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import { ArrayItemOverlay, ArrayAddBtn } from './ArrayControls';
import './About.css';

export default function About() {
  const { data } = useAppContext();
  const { about } = data;

  return (
    <section className="section about reveal" id="about">
      <div className="container">
        {/* Bio */}
        <div className="about__grid">
          <div className="about__bio">
            <span className="section-label">
              <EditableText value={about.label} dataPath={['about', 'label']} />
            </span>
            <h2>
              <EditableText value={about.titleStart} dataPath={['about', 'titleStart']} />{' '}
              <span className="text-gradient">
                <EditableText value={about.titleHighlight} dataPath={['about', 'titleHighlight']} />
              </span>
            </h2>
            <div className="divider" style={{ marginLeft: 0, marginBottom: '1.5rem' }} />
            <p className="about__text">
              <EditableText value={about.text1} dataPath={['about', 'text1']} />
            </p>
            <p className="about__text">
              <EditableText value={about.text2} dataPath={['about', 'text2']} />
            </p>
            <div className="about__actions">
              <a href={about.cvLink} download className="btn btn-gradient">
                <EditableText value={about.cvText} dataPath={['about', 'cvText']} />
              </a>
              <a href={about.talkLink} className="btn btn-outline">
                <EditableText value={about.talkText} dataPath={['about', 'talkText']} />
              </a>
            </div>
          </div>

          <div className="about__skills" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {about.skills.map((s, idx) => (
              <ArrayItemOverlay key={s.id} dataPath={['about', 'skills']} index={idx} currentArray={about.skills}>
                <div className="about__skill">
                  <div className="about__skill-header">
                    <EditableText value={s.label} dataPath={['about', 'skills', idx, 'label']} />
                    <div className="text-gold">
                      <EditableText value={s.pct} dataPath={['about', 'skills', idx, 'pct']} />%
                    </div>
                  </div>
                  <div className="about__skill-bar">
                    <div className="about__skill-fill" style={{ '--pct': `${s.pct}%` }} />
                  </div>
                </div>
              </ArrayItemOverlay>
            ))}
            <ArrayAddBtn 
              dataPath={['about', 'skills']} 
              defaultItem={{ label: 'New Skill', pct: '50' }} 
            />
          </div>
        </div>

        {/* What I Do */}
        <div className="what-i-do" id="services">
          <div className="section-header">
            <span className="section-label">
              <EditableText value={about.servicesLabel} dataPath={['about', 'servicesLabel']} />
            </span>
            <h2>
              <EditableText value={about.servicesTitle} dataPath={['about', 'servicesTitle']} />
            </h2>
            <div className="divider" />
            <p>
              <EditableText value={about.servicesDesc} dataPath={['about', 'servicesDesc']} />
            </p>
          </div>
          <div className="what-i-do__grid">
            {about.services.map((item, idx) => (
              <ArrayItemOverlay key={item.id} dataPath={['about', 'services']} index={idx} currentArray={about.services}>
                <div className="glass-card what-i-do__card float-anim-slow">
                  <div className="what-i-do__icon">{item.icon}</div>
                  <h3><EditableText value={item.title} dataPath={['about', 'services', idx, 'title']} /></h3>
                  <p><EditableText value={item.desc} dataPath={['about', 'services', idx, 'desc']} /></p>
                </div>
              </ArrayItemOverlay>
            ))}
          </div>
          <ArrayAddBtn 
            dataPath={['about', 'services']} 
            defaultItem={{ icon: '✨', title: 'New Service', desc: 'Service description...' }} 
          />
        </div>
      </div>
    </section>
  );
}
