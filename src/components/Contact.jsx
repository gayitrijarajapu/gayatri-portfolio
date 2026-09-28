import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        <h2 className="contact-heading">Let&apos;s Connect</h2>
        <p className="contact-intro">
          Open to internship opportunities in AI/ML and software development.
          Send a message and let&apos;s build something meaningful together.
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
