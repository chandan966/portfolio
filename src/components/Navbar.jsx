import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-mark">CG</span>
          <span className="logo-name">Chandan</span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#education" className="nav-link">
            Education
          </a>

          <a href="#skills" className="nav-link">
            Skills
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#experience" className="nav-link">
            Experience
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* CV Button */}
        <a href="/resume.pdf" className="cv-btn" download>
          <span>Download CV</span>
          <span className="cv-arrow">↓</span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;