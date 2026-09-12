import "./Home.css";
function Home() {
  return (
    <section id="home" className="home">

      {/* Animated Background */}
      <div className="home-bg">
        <span className="circle circle-one"></span>
        <span className="circle circle-two"></span>
        <span className="circle circle-three"></span>
      </div>

      <div className="home-container">

        {/* Left Content */}
        <div className="home-content">

          <p className="home-greeting">
            Hello, I'm
          </p>

          <h1 className="home-name">
            Chandan <span>Ghanghav</span>
          </h1>

          <h2 className="home-role">
            B.Tech CSE Student & Web Developer
          </h2>

          <p className="home-description">
            I build modern, responsive and user-friendly web applications
            using React.js, JavaScript and modern web technologies.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="home-btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="home-btn secondary-btn">
              Contact Me
            </a>

          </div>

        </div>

        {/* Logo */}
        <div className="home-logo-container">

          <div className="logo-glow"></div>

          <div className="home-logo">
            <span>C</span>
            <span>G</span>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </a>

    </section>
  );
}

export default Home;
