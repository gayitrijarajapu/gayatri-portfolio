import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const PremiumCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 320, damping: 28, mass: 0.45 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => setEnabled(media.matches && !reducedMotion.matches);
    updateEnabled();

    media.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      media.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const isInteractive = (target) =>
      target.closest('.btn, button, [role="button"], .nav-links a, .social, .project-card, a');

    const move = (event) => {
      const { clientX, clientY, target } = event;
      mouseX.set(clientX);
      mouseY.set(clientY);
      setVisible(true);
      setIsHoveringInteractive(Boolean(isInteractive(target)));
    };

    const leaveWindow = () => {
      setVisible(false);
      setIsHoveringInteractive(false);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseout', leaveWindow);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', leaveWindow);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="premium-cursor-ring"
      style={{ x, y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: isHoveringInteractive ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
    />
  );
};

export default PremiumCursor;
