import React from 'react';
import { useAppContext } from '../context/AppProvider';

export default function EditableImage({ src, dataPath, fallback, className = '', containerStyle = {} }) {
  const { isEditMode, updateData } = useAppContext();

  const handleContainerClick = (e) => {
    // Only open dialog if we are in edit mode
    if (isEditMode) {
      // Prevent bubbling up to parent edit containers
      e.stopPropagation();
      e.preventDefault();
      
      const pastedUrl = window.prompt("Paste the image URL here:", src || "");
      if (pastedUrl !== null) {
        updateData(dataPath, pastedUrl);
      }
    }
  };

  return (
    <div 
      className={`editable-image ${className}`}
      onClick={handleContainerClick}
      title={isEditMode ? "Click to paste image URL" : ""}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isEditMode ? 'pointer' : 'default',
        boxSizing: 'border-box',
        border: isEditMode ? '2px dashed rgba(0, 255, 204, 0.5)' : 'none',
        ...containerStyle,
      }}
    >
      {src ? (
        <img 
          src={src} 
          alt="Content" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      ) : (
        <div style={{ pointerEvents: isEditMode ? 'none' : 'auto' }}>
          {fallback}
        </div>
      )}
      
      {isEditMode && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.2s',
          color: '#00ffcc',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          🔗 Paste Image URL
        </div>
      )}
    </div>
  );
}
