import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LuBrain, LuFileSearch, LuLeaf } from 'react-icons/lu';
import '../styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectCards = [
  {
    title: 'Plant Disease Detection',
    description: 'A CNN-driven crop health system that diagnoses leaf disease from image uploads and surfaces treatment guidance with confidence scoring.',
    type: 'Computer Vision',
    metric: '94.6% accuracy',
    tags: ['TensorFlow', 'CNN', 'Agriculture AI'],
    icon: <LuLeaf strokeWidth={1.8} />,
    stars: 4,
  },
  {
    title: 'Automatic Image Caption Generator',
    description: 'Developed an AI-powered image captioning application using YOLOv8 for object detection and BLIP for caption generation, with multilingual translation, text-to-speech, object counting, and image upload in an interactive Streamlit app.',
    type: 'Multimodal AI',
    metric: 'Captioning + TTS',
    tags: ['Python', 'YOLOv8', 'BLIP', 'Streamlit', 'gTTS'],
    icon: <LuBrain strokeWidth={1.8} />,
    stars: 5,
    url: 'https://automatic-image-caption-generator.streamlit.app/',
  },
  {
    title: 'AI-Powered Document Analysis & RAG Platform - DocuMind AI',
    description: 'Built a full-stack AI application for PDF upload, AI-powered summarization, information extraction, and RAG-based question answering. Developed FastAPI APIs with PostgreSQL, integrated Gemini and FAISS for document retrieval, and created a React dashboard with AI chat and page-level source references.',
    type: 'DocuMind AI',
    metric: 'RAG Q&A with sources',
    tags: ['React', 'Python', 'FastAPI', 'Gemini', 'FAISS', 'PostgreSQL'],
    icon: <LuFileSearch strokeWidth={1.8} />,
    stars: 5,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (>= 1024px) ---
      mm.add("(min-width: 1024px)", () => {
        const headingLeftParts = gsap.utils.toArray('.projects-heading-left', section);
        const headingRightParts = gsap.utils.toArray('.projects-heading-accent', section);
        const cardsStack = section.querySelector('.projects-cards-stack');
        const cardElements = gsap.utils.toArray('.project-card-premium', section);

        if (!cardsStack || !headingLeftParts.length || !headingRightParts.length) {
          return;
        }

        const splitHeading = section.querySelector('.projects-split-heading');
        const leftLabel = splitHeading?.querySelector('.projects-heading-left');
        const rightLabel = splitHeading?.querySelector('.projects-heading-accent');
        const cardWidth = cardsStack.getBoundingClientRect().width;
        const leftWidth = leftLabel?.offsetWidth || 220;
        const rightWidth = rightLabel?.offsetWidth || 220;

        const cardHeights = cardElements.map((el) => el.offsetHeight || 320);
        const lastCardHeight = cardHeights[cardHeights.length - 1] || 320;
        const cardGap = 36;

        const headingFlexGap = Math.min(cardWidth * 0.42, 240);
        const safePadding = window.innerWidth < 1200 ? 32 : 48;
        const maxSpread = Math.max(
          80,
          window.innerWidth * 0.5 - headingFlexGap * 0.5 - Math.max(leftWidth, rightWidth) - safePadding
        );

        const desiredSpread = Math.max(
          cardWidth * 0.5 + Math.max(leftWidth, rightWidth) * 0.5 + 40,
          window.innerWidth * 0.3,
          280
        );

        const headingSpread = Math.min(desiredSpread, maxSpread);
        const cardScrollDistance = cardHeights.slice(0, -1).reduce((sum, h) => sum + h, 0) + (cardElements.length - 1) * cardGap;

        const pinScrollDistance = Math.round(
          cardScrollDistance + Math.round(window.innerHeight * 0.24)
        );

        const stageTop = window.innerHeight * 0.10 + 32;
        const targetBottom = window.innerHeight - 140;
        const calculatedMarginTop = Math.max(70, targetBottom - stageTop - lastCardHeight);

        gsap.set(headingLeftParts, { x: 0, force3D: true });
        gsap.set(headingRightParts, { x: 0, force3D: true });
        if (splitHeading) {
          gsap.set(splitHeading, { gap: 0 });
        }
        gsap.set(cardsStack, { 
          marginTop: calculatedMarginTop,
          y: 48, 
          opacity: 0.92, 
          force3D: true 
        });
        gsap.set(cardElements, { opacity: 0.95, force3D: true });

        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${pinScrollDistance}`,
            scrub: 0.4,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        masterTimeline
          .to(headingLeftParts, {
            x: -headingSpread,
            duration: 0.48,
            ease: 'power2.inOut',
          }, 0)
          .to(headingRightParts, {
            x: headingSpread,
            duration: 0.48,
            ease: 'power2.inOut',
          }, 0)
          .to(splitHeading, {
            gap: headingFlexGap,
            duration: 0.48,
            ease: 'power2.inOut',
          }, 0)
          .to(cardsStack, {
            y: -cardScrollDistance,
            opacity: 1,
            duration: 0.68,
            ease: 'none',
          }, 0.48)
          .to(cardElements, {
            opacity: 1,
            duration: 0.2,
            stagger: 0.03,
            ease: 'power2.out',
          }, 0.48);
      });

      // --- MOBILE ANIMATION (<= 768px) ---
      mm.add("(max-width: 768px)", () => {
        const headingLeftParts = gsap.utils.toArray('.projects-split-heading .projects-heading-left', section);
        const headingRightParts = gsap.utils.toArray('.projects-split-heading .projects-heading-accent', section);
        const cardsStack = section.querySelector('.projects-cards-stack');
        const cardElements = gsap.utils.toArray('.project-card-premium', section);

        if (!cardsStack || !headingLeftParts.length || !headingRightParts.length) {
          return;
        }

        const splitHeading = section.querySelector('.projects-split-heading');
        const leftLabel = splitHeading?.querySelector('.projects-heading-left');
        const rightLabel = splitHeading?.querySelector('.projects-heading-accent');
        const cardWidth = cardsStack.getBoundingClientRect().width;
        const leftWidth = leftLabel?.offsetWidth || 110;
        const rightWidth = rightLabel?.offsetWidth || 110;

        const cardHeights = cardElements.map((el) => el.offsetHeight || 300);
        const lastCardHeight = cardHeights[cardHeights.length - 1] || 300;
        const cardGap = 24;

        // Calculate flexible gaps and spreads for mobile screen width
        const headingFlexGap = Math.min(cardWidth * 0.42, 140);
        const safePadding = 16;
        const maxSpread = Math.max(
          60,
          window.innerWidth * 0.5 - headingFlexGap * 0.5 - Math.max(leftWidth, rightWidth) - safePadding
        );

        const desiredSpread = Math.max(
          cardWidth * 0.5 + Math.max(leftWidth, rightWidth) * 0.5 + 20,
          window.innerWidth * 0.25,
          140
        );

        const headingSpread = Math.min(desiredSpread, maxSpread);
        const cardScrollDistance = cardHeights.slice(0, -1).reduce((sum, h) => sum + h, 0) + (cardElements.length - 1) * cardGap;

        // Increase pin duration on mobile to prevent premature unpinning from touch momentum
        const pinScrollDistance = Math.round(
          cardScrollDistance + window.innerHeight * 1.5
        );

        const stageTop = 225; // below mobile sticky heading top of 180px
        const targetBottom = window.innerHeight - 135; // leaves ~120px spacing at bottom
        const calculatedMarginTop = Math.max(30, targetBottom - stageTop - lastCardHeight);

        gsap.set(headingLeftParts, { x: 0, force3D: true });
        gsap.set(headingRightParts, { x: 0, force3D: true });
        if (splitHeading) {
          gsap.set(splitHeading, { gap: 0 });
        }
        
        // Start cards stack exactly at calculatedMarginTop (no extra offset needed due to viewport wrapping)
        const initialCardsY = 0;

        gsap.set(cardsStack, {
          marginTop: calculatedMarginTop,
          y: initialCardsY,
          opacity: 1.0,
          force3D: true
        });
        gsap.set(cardElements, { opacity: 0.9, force3D: true });

        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${pinScrollDistance}`,
            scrub: 0.8, // lag slightly for smooth touch scrolling
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        // 1. Heading splits first (from 0 to 0.3 duration) - cards do NOT move
        mobileTimeline
          .to(headingLeftParts, {
            x: -headingSpread,
            duration: 0.3,
            ease: 'power2.out',
          }, 0)
          .to(headingRightParts, {
            x: headingSpread,
            duration: 0.3,
            ease: 'power2.out',
          }, 0)
          .to(splitHeading, {
            gap: headingFlexGap,
            duration: 0.3,
            ease: 'power2.out',
          }, 0)
          // 2. Card stack translates up after the split completes (starts at 0.3, duration: 0.7)
          .to(cardsStack, {
            y: -cardScrollDistance,
            opacity: 1,
            duration: 0.7,
            ease: 'none',
          }, 0.3)
          .to(cardElements, {
            opacity: 1,
            duration: 0.2,
            stagger: 0.08,
            ease: 'power2.out',
          }, 0.3);
      });
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className="premium-projects-section" id="projects" ref={sectionRef}>
      <div className="premium-projects-backdrop" aria-hidden="true">
        <span className="premium-orb orb-a" />
        <span className="premium-orb orb-b" />
      </div>

      <div className="premium-projects-shell">
        <div className="projects-hero-copy">
          <h2 className="projects-centered-heading">
            <span className="projects-heading-left">AI & ML</span>{' '}
            <span className="projects-heading-accent">Projects</span>
          </h2>
        </div>

        <div className="projects-scroll-stage">
          <div className="projects-split-heading" aria-label="AI and ML Projects">
            <span className="projects-heading-left">AI & ML</span>
            <span className="projects-heading-accent">Projects</span>
          </div>

          <div className="projects-cards-viewport">
            <div
              className="projects-cards-stack"
              role="list"
              aria-label="Project showcase"
            >
              {projectCards.map((project, index) => (
                <article
                  key={project.title}
                  className={`project-card-premium${project.url ? ' is-clickable' : ''}`}
                  role="listitem"
                  tabIndex={project.url ? 0 : undefined}
                  aria-label={project.url ? `${project.title}. Open deployed project.` : undefined}
                  onClick={() => {
                    if (project.url) {
                      window.open(project.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  onKeyDown={(event) => {
                    if (project.url && (event.key === 'Enter' || event.key === ' ')) {
                      event.preventDefault();
                      window.open(project.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="project-card-header">
                    <h3>{project.title}</h3>
                    <p className="project-stars" aria-label={`Rating ${project.stars} of 4`}>
                      {[0, 1, 2, 3, 4].map((s) => (
                        <span
                          key={`${project.title}-${s}`}
                          className={s < project.stars ? 'star-filled' : 'star-empty'}
                        >
                          ✦
                        </span>
                      ))}
                    </p>
                  </div>

                  <div
                    className="project-icon-pop"
                    style={{ animationDelay: `${index * 130}ms` }}
                    aria-hidden="true"
                  >
                    {project.icon}
                  </div>

                  <div className="project-card-content">
                    <p>{project.description}</p>
                  </div>

                  <div className="project-tags" aria-label="Project stack">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="project-type-pill">{project.type}</span>
                    <span className="project-metric">{project.metric}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
