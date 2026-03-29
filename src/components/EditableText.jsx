import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppProvider';

export default function EditableText({ 
  value, 
  dataPath, 
  as: Component = 'span',
  className = ''
}) {
  const { isEditMode, updateData } = useAppContext();
  const [internalValue, setInternalValue] = useState(value);
  const elementRef = useRef(null);

  // Sync internal value if global state changes externally
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  if (!isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  const handleBlur = () => {
    if (internalValue !== value) {
      updateData(dataPath, internalValue);
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`${className} editable-region`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onInput={e => setInternalValue(e.currentTarget.textContent)}
      style={{
        border: '1px dashed rgba(0, 255, 204, 0.5)',
        padding: '2px 4px',
        borderRadius: '4px',
        cursor: 'text',
        outline: 'none',
        minWidth: '20px',
        display: 'inline-block'
      }}
    >
      {value}
    </Component>
  );
}
