import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.css';

gsap.registerPlugin(ScrollTrigger);

const aboutLines = [
  'I am a final-year Computer Science student focused on AI/ML and full stack development.',
  'I build practical products using Python, FastAPI, React.js, and PostgreSQL.',
  'My projects include plant disease classification and AI-powered image caption generation.',
  'I enjoy transforming complex ideas into elegant, usable experiences with real-world impact.',
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const lineElements = Array.from(section.querySelectorAll('.about-line'));

    gsap.set(lineElements, {
      opacity: 0,
      y: 28,
      transformOrigin: 'center center',
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=280%',
          pin: true,
          scrub: 1.2,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        '.about-cinematic-heading',
        { opacity: 0.65, y: 24, scale: 0.95, fontWeight: 600 },
        { opacity: 1, y: 0, scale: 1.05, fontWeight: 800, ease: 'power3.out', duration: 0.9 }
      )
        .fromTo(
          '.about-divider',
          { scaleX: 0, opacity: 0.45 },
          { scaleX: 1, opacity: 1, transformOrigin: 'left center', ease: 'power2.out', duration: 0.6 },
          '-=0.45'
        );

      lineElements.forEach((line, index) => {
        tl.fromTo(
          line,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.72,
          },
          0.22 + index * 0.52
        );
      });

      tl.to(
        '.about-content-flow',
        {
          y: -40,
          ease: 'none',
          duration: 1.2,
        },
        '+=0.12'
      );

      gsap.to('.about-glow', {
        yPercent: -10,
        xPercent: 6,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: 'sine.inOut',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-cinematic" id="about" ref={sectionRef}>
      <div className="about-glow" aria-hidden="true" />
      <div className="about-cinematic-card">
        <div className="about-content-flow">
          <h2 className="about-cinematic-heading">
            <span className="about-heading-left">About</span>{' '}
            <span className="about-heading-accent">Me</span>
          </h2>
          <div className="about-divider" aria-hidden="true" />

          <div className="about-lines-wrap">
            {aboutLines.map((line) => (
              <p key={line} className="about-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
