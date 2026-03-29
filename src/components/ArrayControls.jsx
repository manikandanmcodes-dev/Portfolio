import React from 'react';
import { useAppContext } from '../context/AppProvider';

export function ArrayAddBtn({ dataPath, defaultItem }) {
  const { data, updateData, isEditMode } = useAppContext();
  
  if (!isEditMode) return null;

  const currentArray = dataPath.reduce((acc, key) => acc[key], data) || [];

  const handleAdd = () => {
    const newItem = { ...defaultItem, id: `item-${Date.now()}` };
    updateData(dataPath, [...currentArray, newItem]);
  };

  return (
    <button onClick={handleAdd} className="btn btn-outline" style={{ marginTop: '1rem', width: '100%', borderColor: 'var(--neon-green, #10B981)', color: 'var(--neon-green, #10B981)' }}>
      + Add Item
    </button>
  );
}

export function ArrayItemOverlay({ dataPath, index, currentArray, children }) {
  const { updateData, isEditMode } = useAppContext();

  if (!isEditMode) return <>{children}</>;

  const handleRemove = () => {
    const newArray = currentArray.filter((_, i) => i !== index);
    updateData(dataPath, newArray);
  };
  
  const moveUp = () => {
    if (index === 0) return;
    const newArray = [...currentArray];
    [newArray[index - 1], newArray[index]] = [newArray[index], newArray[index - 1]];
    updateData(dataPath, newArray);
  };
  
  const moveDown = () => {
    if (index === currentArray.length - 1) return;
    const newArray = [...currentArray];
    [newArray[index + 1], newArray[index]] = [newArray[index], newArray[index + 1]];
    updateData(dataPath, newArray);
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ position: 'absolute', top: '-12px', right: '-12px', zIndex: 100, display: 'flex', gap: '5px' }}>
        <button onClick={moveUp} style={btnStyle} title="Move Up">↑</button>
        <button onClick={moveDown} style={btnStyle} title="Move Down">↓</button>
        <button onClick={handleRemove} style={{ ...btnStyle, background: 'rgba(239, 68, 68, 0.8)' }} title="Delete">✕</button>
      </div>
      <div style={{ border: '1px dashed rgba(255,255,255,0.3)', padding: '5px', borderRadius: '10px', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

const btnStyle = {
  background: 'rgba(0,0,0,0.8)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: 'white',
  borderRadius: '4px',
  cursor: 'pointer',
  padding: '4px 8px',
  fontSize: '12px'
};
