import React from 'react';
import { useAppContext } from '../context/AppProvider';
import './EditToggle.css';

export default function EditToggle() {
  const { isEditMode, setIsEditMode } = useAppContext();

  return (
    <div className="edit-toggle-wrapper">
      <button 
        className={`edit-toggle-btn ${isEditMode ? 'active' : ''}`}
        onClick={() => setIsEditMode(!isEditMode)}
      >
        <span className="edit-toggle-icon">✏️</span>
        {isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
      </button>
    </div>
  );
}
