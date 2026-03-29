import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultAppData } from '../data/defaultAppData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Source of truth is now purely the disk file! No localStorage hacks.
  const [data, setData] = useState(defaultAppData);

  // Keep Edit Mode active even if Vite forces a hot-reload or page refresh!
  const [isEditMode, setIsEditMode] = useState(() => {
    return sessionStorage.getItem('cms_isEditMode') === 'true';
  });

  useEffect(() => {
    sessionStorage.setItem('cms_isEditMode', isEditMode);
  }, [isEditMode]);

  // Still support HMR if you edit the file manually in VS Code
  useEffect(() => {
    setData(defaultAppData);
  }, [JSON.stringify(defaultAppData)]);

  const updateData = (path, value) => {
    setData(prev => {
      const newData = { ...prev };
      let current = newData;

      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (Array.isArray(current[key])) {
          current[key] = [...current[key]];
        } else {
          current[key] = { ...current[key] };
        }
        current = current[key];
      }

      current[path[path.length - 1]] = value;

      // PERMANENTLY WRITE TO DISK !!
      if (import.meta.env.DEV) {
        fetch('/api/save-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newData)
        }).catch(err => console.error('Failed to save instantly to disk:', err));
      }

      return newData;
    });
  };

  return (
    <AppContext.Provider value={{ data, updateData, isEditMode, setIsEditMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
