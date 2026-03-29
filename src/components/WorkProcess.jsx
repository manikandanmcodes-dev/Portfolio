import React from 'react';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import { ArrayItemOverlay, ArrayAddBtn } from './ArrayControls';
import './WorkProcess.css';

export default function WorkProcess() {
  const { data } = useAppContext();
  const { process } = data;

  return (
    <section className="section work-process reveal" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <EditableText value={process.label} dataPath={['process', 'label']} />
          </span>
          <h2>
            <EditableText value={process.title} dataPath={['process', 'title']} />
          </h2>
          <div className="divider" />
          <p>
            <EditableText value={process.desc} dataPath={['process', 'desc']} />
          </p>
        </div>

        <div className="process__timeline">
          {process.steps.map((step, i) => (
            <ArrayItemOverlay key={step.id} dataPath={['process', 'steps']} index={i} currentArray={process.steps}>
              <div className={`process__step glass-card ${i % 2 === 1 ? 'process__step--right' : ''}`}>
                <div className="process__num">
                  <EditableText value={step.num} dataPath={['process', 'steps', i, 'num']} />
                </div>
                <div className="process__content">
                  <h3><EditableText value={step.title} dataPath={['process', 'steps', i, 'title']} /></h3>
                  <p><EditableText value={step.desc} dataPath={['process', 'steps', i, 'desc']} /></p>
                </div>
                {i < process.steps.length - 1 && <div className="process__connector" />}
              </div>
            </ArrayItemOverlay>
          ))}
        </div>
        <ArrayAddBtn 
          dataPath={['process', 'steps']} 
          defaultItem={{ num: '00', title: 'New Step', desc: 'Describe the new workflow step here.' }} 
        />
      </div>
    </section>
  );
}
