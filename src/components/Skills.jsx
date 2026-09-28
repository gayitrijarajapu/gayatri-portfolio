const Skills = () => {
  const skills = [
    'Python',
    'JavaScript',
    'SQL',
    'React.js',
    'FastAPI',
    'TensorFlow',
    'PostgreSQL',
    'Machine Learning',
    'Deep Learning',
    'Git & GitHub',
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-card">
          <h2>Core Skills</h2>
          <p className="section-intro">
            Technical skills I use across AI/ML and software development projects.
          </p>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s} className="skill-card">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
