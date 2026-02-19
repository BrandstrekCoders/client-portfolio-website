import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  enableParticles?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  glowColor?: string;
}

const MagicCard = ({
  children,
  className = '',
  enableParticles = true,
  enableBorderGlow = true,
  enableTilt = true,
  glowColor = '16, 185, 129' // Default to green
}: MagicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Update glow position
      const relativeX = (x / rect.width) * 100;
      const relativeY = (y / rect.height) * 100;
      card.style.setProperty('--glow-x', `${relativeX}%`);
      card.style.setProperty('--glow-y', `${relativeY}%`);
      card.style.setProperty('--glow-intensity', '1');

      // Tilt effect
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      card.style.setProperty('--glow-intensity', '1');

      // Create particles
      if (enableParticles) {
        const rect = card.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            if (!isHoveredRef.current) return;
            
            const particle = document.createElement('div');
            particle.className = 'magic-particle';
            particle.style.cssText = `
              position: absolute;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: rgba(${glowColor}, 1);
              box-shadow: 0 0 8px rgba(${glowColor}, 0.8);
              pointer-events: none;
              z-index: 100;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
            `;
            card.appendChild(particle);
            particlesRef.current.push(particle);

            gsap.fromTo(
              particle,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
            );

            gsap.to(particle, {
              x: (Math.random() - 0.5) * 60,
              y: (Math.random() - 0.5) * 60,
              rotation: Math.random() * 360,
              duration: 2 + Math.random() * 2,
              ease: 'none',
              repeat: -1,
              yoyo: true
            });

            gsap.to(particle, {
              opacity: 0.3,
              duration: 1.5,
              ease: 'power2.inOut',
              repeat: -1,
              yoyo: true
            });
          }, i * 100);
        }
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      card.style.setProperty('--glow-intensity', '0');

      // Remove particles
      particlesRef.current.forEach(particle => {
        gsap.to(particle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'back.in(1.7)',
          onComplete: () => {
            particle.remove();
          }
        });
      });
      particlesRef.current = [];

      // Reset tilt
      if (enableTilt) {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
      particlesRef.current.forEach(p => p.remove());
    };
  }, [enableParticles, enableBorderGlow, enableTilt, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`magic-card ${enableBorderGlow ? 'magic-card--glow' : ''} ${className}`}
      style={{
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-intensity': '0',
        '--glow-color': glowColor
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default MagicCard;
