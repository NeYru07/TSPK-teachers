'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number; // Сила наклона (по умолчанию 10)
  scaleHover?: number;   // Масштаб при наведении (по умолчанию 1.1)
  scaleActive?: number;  // Масштаб при нажатии (по умолчанию 1.05)
}

export default function Card3D({ 
  children, 
  className = '', 
  tiltStrength = 50,
  scaleHover = 1.01,
  scaleActive = 1 
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let isMouseDown = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (rect.height / 2 - y) / tiltStrength;
      const rotateY = (x - rect.width / 2) / tiltStrength;
      const scale = isMouseDown ? scaleActive : scaleHover;

      card.style.transform = `perspective(62.5rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateZ(.625rem)`;
      card.style.boxShadow = `0 0 1.5625rem rgba(0, 0, 0, 0.5)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = '0 .625rem .9375rem rgba(0, 0, 0, 0.5)';
      isMouseDown = false;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      card.style.transform = card.style.transform.replace(/scale\([^\)]+\)/, `scale(${scaleActive})`);
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      card.style.transform = card.style.transform.replace(/scale\([^\)]+\)/, `scale(${scaleHover})`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousedown', handleMouseDown);
    card.addEventListener('mouseup', handleMouseUp);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousedown', handleMouseDown);
      card.removeEventListener('mouseup', handleMouseUp);
    };
  }, [tiltStrength, scaleHover, scaleActive]);

  return (
    <div 
      ref={cardRef}
      className={`card transition-shadow duration-500 ease-out will-change-transform cursor-pointer ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}