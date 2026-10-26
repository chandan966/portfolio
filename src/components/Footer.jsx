import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="https://www.instagram.com/trigger_toofan?vrfl=N3JjMTFrZjVwempj" className="footer-brand-button">
              WebDev<span>Chandan</span>
              <span className="footer-brand-arrow" aria-hidden="true">↗</span>
            </a>
            <p>Building thoughtful, responsive experiences for the web.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-connect">
            <span className="footer-eyebrow">LET'S CONNECT</span>
            <a href="mailto:chandanghanghav256@gmail.com">
              chandanghanghav256@gmail.com
            </a>
            <div className="footer-socials">
              <a
                href="https://github.com/chandan966"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/web~developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Chandan Ghanghav. All rights reserved.</p>
          <a href="#home" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;