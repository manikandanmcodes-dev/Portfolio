import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef   = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const dot   = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    let mx = 0, my = 0;   // actual mouse
    let tx = 0, ty = 0;   // trail position (lerped)
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    };

    const lerp = (start, end, t) => start + (end - start) * t;

    const animate = () => {
      tx = lerp(tx, mx, 0.12);
      ty = lerp(ty, my, 0.12);
      trail.style.left = tx + 'px';
      trail.style.top  = ty + 'px';
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
