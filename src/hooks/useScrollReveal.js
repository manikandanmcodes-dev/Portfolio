import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Attaches an IntersectionObserver to every element with class "reveal".
 * When the element enters the viewport it gets the "visible" class added.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Small delay ensures React finishes mounting DOM elements after route change
    const timeoutId = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);
}
