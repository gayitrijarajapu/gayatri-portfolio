import Silk from './Silk';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <Silk
          speed={3.9}
          scale={0.8}
          color="#795fad"
          noiseIntensity={0.8}
          rotation={4.83}
        />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy panel">
          <h1>Gayatri Jarajapu</h1>
          <h2>AI/ML Enthusiast and Full Stack Developer building real-world applications.</h2>
          <p className="lead">
            Passionate Computer Science undergraduate with a strong interest in
            AI/ML and full-stack development. I enjoy exploring emerging
            technologies and applying new ideas to build meaningful,
            user-focused solutions.
          </p>
          <div className="hero-cta">
            <a className="btn hero-view-btn" href="#projects">
              <span>View My Work</span>
              <span className="hero-view-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
