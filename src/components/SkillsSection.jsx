import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaAws,
  FaGithub,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiFastapi, SiPostgresql } from 'react-icons/si';
import { TbBrain, TbRobot } from 'react-icons/tb';
import '../styles/skills.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: 'React',
    icon: FaReact,
    detail: 'Component-driven UIs with reusable architecture.',
  },
  {
    title: 'Python',
    icon: FaPython,
    detail: 'Core language for backend and ML workflows.',
  },
  {
    title: 'FastAPI',
    icon: SiFastapi,
    detail: 'High-performance APIs with clean async patterns.',
  },
  {
    title: 'PostgreSQL',
    icon: SiPostgresql,
    detail: 'Reliable relational database design and queries.',
  },
  {
    title: 'AWS',
    icon: FaAws,
    detail: 'Cloud deployment and scalable service integration.',
  },
  {
    title: 'AI/ML',
    icon: TbBrain,
    detail: 'Applied machine learning for real-world products.',
  },
  {
    title: 'AI Agents',
    icon: TbRobot,
    detail: 'Building autonomous AI workflows for practical automation.',
  },
  {
    title: 'GitHub',
    icon: FaGithub,
    detail: 'Version control, collaboration, and CI workflows.',
  },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return undefined;

    const ctx = gsap.context(() => {
      const calculateDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track, {
        x: () => -calculateDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${calculateDistance() + window.innerHeight * 0.35}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from('.skills-hero', {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      });

      return () => {
        horizontalTween.scrollTrigger?.kill();
        horizontalTween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills-horizontal" id="skills" ref={sectionRef}>
      <div className="skills-hero">
        <h2>
          <span className="skills-heading-left">My</span>{' '}
          <span className="skills-heading-accent">Skills</span>
        </h2>
        <p>
          Scroll to explore the technologies I use to build AI/ML and full stack products.
        </p>
      </div>

      <div className="skills-track-wrap">
        <div className="skills-track" ref={trackRef}>
          {skills.map((skill, index) => (
            <article key={skill.title} className="skills-panel" style={{ '--i': index }}>
              <div className="skills-content">
                <skill.icon className="skills-icon" aria-hidden="true" />
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
