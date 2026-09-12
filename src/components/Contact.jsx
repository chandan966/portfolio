
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">CONTACT ME</p>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p>
            Have a project idea or opportunity? Feel free to get in touch
            with me.
          </p>
        </div>

        <div className="contact-container">

          {/* =====================================
              CONTACT INFORMATION
          ====================================== */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p className="contact-intro">
              I am open to discussing web development projects,
              internships, freelance opportunities, and career
              opportunities.
            </p>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-item-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:chandanghanghav256@gmail.com">
                  chandanghanghav256@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-item-icon">
                📍
              </div>

              <div>
                <span>Location</span>
                <p>Navi Mumbai, Digha</p>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-item">
              <div className="contact-item-icon">
                ●
              </div>

              <div>
                <span>Availability</span>
                <p>Open to opportunities</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <span className="social-title">Connect With Me</span>

              <div className="social-links">

                {/* GitHub */}
                <a
                  href="https://github.com/chandan966"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="social-icon"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.17c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/web~developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="social-icon linkedin"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
                  </svg>
                </a>

              </div>
            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ====================================== */}
          <form className="contact-form">

            {/* Name */}
            <div className="form-group">
              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>


            {/* Email */}
            <div className="form-group">
              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>


            {/* Subject */}
            <div className="form-group">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Enter message subject"
                required
              />
            </div>


            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="contact-btn"
            >
              <span>Send Message</span>
              <span className="btn-arrow">→</span>
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
