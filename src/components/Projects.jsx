const Projects = () => {
  const projects = [
    {
      title: 'AI Image Caption Generator',
      desc: 'An AI-powered web app that generates captions from images, detects objects, translates text, and provides voice output for better accessibility.',
      img: '/1778926433942.jpeg',
      imageLink: '/1778926433766.jpeg',
      projectLink: 'https://github.com/gayitrijarajapu/automatic-image-caption-generator',
      stack: ['Python', 'YOLO', 'BLIP', 'Streamlit', 'Translation', 'Text-to-Speech'],
    },
    {
      title: 'Plant Disease Classification App',
      desc: 'This web app predicts plant leaf diseases using TensorFlow and Gradio. Users can upload a plant leaf image and get the predicted disease name with a confidence score.',
      img: '/1778477738808.jpeg',
      imageLink: '/1778477738808.jpeg',
      projectLink: 'https://github.com/gayitrijarajapu/plant-disease-project',
      stack: ['Python', 'TensorFlow', 'Gradio', 'Deep Learning', 'Image Classification'],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-card">
          <h2>AI & ML Featured Projects</h2>
          <p className="section-intro">
            Real-world AI/ML applications I built to improve accessibility, save time, and solve practical user problems.
          </p>
          <div className="projects-grid">
            {projects.map((p) => (
              <article
                key={p.title}
                className="project-card project-clickable"
                role="button"
                tabIndex={0}
                onClick={() => window.open(p.imageLink, '_blank', 'noopener,noreferrer')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(p.imageLink, '_blank', 'noopener,noreferrer');
                  }
                }}
                aria-label={`Open image preview for ${p.title}`}
              >
                  <img src={p.img} alt={p.title} className="project-img" />
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div>
                      {p.stack.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                    {p.projectLink && (
                      <p>
                        <a
                          className="btn repo-btn"
                          href={p.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          View GitHub Repo
                        </a>
                      </p>
                    )}
                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
