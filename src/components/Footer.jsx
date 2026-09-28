import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer footer-premium">
    <div className="container footer-premium-inner">
      <div className="footer-brand-col">
        <div className="footer-brand-row">
          <img src="/favicon.ico" alt="Gayatri logo" className="footer-logo" />
          <h3 className="footer-brand-name">Gayatri Jarajapu</h3>
        </div>

        <p className="footer-desc">
          Building practical AI/ML and full stack products that solve real-world problems.
        </p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/gayitri_jarajapu?igsh=NDNlaTBxcTJ4dm42&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link"><FaInstagram size={22} /></a>
          <a href="https://www.linkedin.com/in/gayitri-jarajapu-325071346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link"><FaLinkedinIn size={22} /></a>
          <a href="mailto:gayitrijarajapu@gmail.com" aria-label="Email" className="footer-social-link"><FaEnvelope size={22} /></a>
          <a href="https://github.com/gayitrijarajapu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link"><FaGithub size={22} /></a>
        </div>
      </div>

      <div className="footer-links-col">
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>

    <div className="container footer-bottom-row">
      <p>© 2026 Gayatri Jarajapu | All Rights Reserved</p>
      <p>Makavarapalem, Andhra Pradesh | Contact: 7207258450</p>
    </div>
  </footer>
);

export default Footer;
