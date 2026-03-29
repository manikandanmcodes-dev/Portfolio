import React from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import { ArrayItemOverlay, ArrayAddBtn } from './ArrayControls';
import './Testimonials.css';

export default function Testimonials() {
  const { data } = useAppContext();
  const { testimonials } = data;

  return (
    <section className="section testimonials reveal" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <EditableText value={testimonials.label} dataPath={['testimonials', 'label']} />
          </span>
          <h2>
            <EditableText value={testimonials.title} dataPath={['testimonials', 'title']} />
          </h2>
          <div className="divider" />
          <p>
            <EditableText value={testimonials.desc} dataPath={['testimonials', 'desc']} />
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <ArrayItemOverlay key={t.id} dataPath={['testimonials', 'items']} index={i} currentArray={testimonials.items}>
              <div className={`glass-card testimonials__card ${i === 1 ? 'testimonials__card--featured' : ''}`}>
                <div className="testimonials__quote-icon">"</div>
                <p className="testimonials__quote">
                  <EditableText value={t.quote} dataPath={['testimonials', 'items', i, 'quote']} />
                </p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    <EditableText value={t.avatar} dataPath={['testimonials', 'items', i, 'avatar']} />
                  </div>
                  <div>
                    <strong className="text-gold">
                      <EditableText value={t.name} dataPath={['testimonials', 'items', i, 'name']} />
                    </strong>
                    <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                      <EditableText value={t.role} dataPath={['testimonials', 'items', i, 'role']} />
                    </p>
                  </div>
                </div>
              </div>
            </ArrayItemOverlay>
          ))}
        </div>
        <ArrayAddBtn 
          dataPath={['testimonials', 'items']} 
          defaultItem={{ name: 'Jane Doe', role: 'CEO, Startup', quote: 'Great feedback goes here.', avatar: 'JD' }} 
        />
      </div>
    </section>
  );
}
