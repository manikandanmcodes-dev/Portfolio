import { useEffect, useRef } from 'react';

const STAR_COUNT = 180;

function randomBetween(a, b) { return a + Math.random() * (b - a); }

export default function StarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Build stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: randomBetween(0.4, 1.8),
      speed: randomBetween(0.00005, 0.0002),
      phase: Math.random() * Math.PI * 2,
    }));

    let width, height, raf;

    const resize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const opacity = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.speed * 3000 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
