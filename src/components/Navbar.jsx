import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

const iconItems = [
  {
    href: 'https://www.instagram.com/gayitri_jarajapu?igsh=NDNlaTBxcTJ4dm42&utm_source=qr',
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://www.linkedin.com/in/gayitri-jarajapu-325071346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  {
    href: 'mailto:gayitrijarajapu@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
  },
  {
    href: 'https://github.com/gayitrijarajapu',
    label: 'GitHub',
    icon: FaGithub,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = useMemo(
    () =>
      navItems.map((item) => (
        <motion.a
          key={item.id}
          href={`#${item.id}`}
          className={`dock-link ${activeSection === item.id ? 'is-active' : ''}`}
          whileHover={{ y: -1.5, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
        >
          {item.label}
        </motion.a>
      )),
    [activeSection]
  );

  return (
    <div className="dock-navbar-wrap">
      <motion.nav
        className="dock-navbar"
        initial={{ y: -24, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="dock-inner">
          <a href="#home" className="dock-left" aria-label="Go to home">
            <img src="/favicon.ico" alt="Logo" className="dock-favicon" />
          </a>

          <div className="dock-center">{navLinks}</div>

          <div className="dock-right">
            <div className="dock-icon-group" aria-label="Social and contact icons">
              {iconItems.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="dock-icon"
                  aria-label={label}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.12, y: -1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="dock-contact"
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              Contact
            </motion.a>
          </div>
        </div>

        <div className="dock-progress-track" aria-hidden="true">
          <motion.div className="dock-progress-line" style={{ scaleX: progressScale }} />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
