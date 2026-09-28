import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        <h2 className="contact-heading">Let&apos;s Connect</h2>
        <p className="contact-intro">
          Based in Vizianagaram, Andhra Pradesh, India. Open to AI/ML,
          data science, and full-stack development opportunities.
        </p>
        <form
          className="contact-form"
          action="mailto:gayitrijarajapu@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Your Name
            <input type="text" name="name" required />
          </label>
          <label>
            Your Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
