
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg-shape about-bg-shape-one"></div>
      <div className="about-bg-shape about-bg-shape-two"></div>

      <div className="container about-container">
        {/* Image */}
        <div className="about-image">
          <div className="about-image-glow"></div>

          <div className="about-image-box">
            <div className="about-image-inner">
              <span>CG</span>
            </div>
my-frontend/src/components/About.jsx
            <div className="about-floating-card about-card-one">
              <strong>3+</strong>
              <small>Years Learning</small>
            </div>

            <div className="about-floating-card about-card-two">
              <strong>∞</strong>
              <small>Always Learning</small>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building Digital Experiences
            <span> With Code</span>
          </h2>

          <p className="about-description">
            I am a Computer Science Engineering student and aspiring Full
            Stack Developer. I enjoy building modern web applications and
            learning technologies that help me solve real-world problems.
          </p>

          <p className="about-description">
            My current focus is on React, Java, Spring Boot, MySQL and Data
            Structures & Algorithms. I am continuously improving my development
            and problem-solving skills.
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-number">01</div>
              <div>
                <h3>Clean Code</h3>
                <p>Writing structured and maintainable code.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-number">02</div>
              <div>
                <h3>Responsive</h3>
                <p>Websites that work across all devices.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-number">03</div>
              <div>
                <h3>Modern UI</h3>
                <p>Simple and professional user interfaces.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-number">04</div>
              <div>
                <h3>Problem Solving</h3>
                <p>Focused on logic and efficient solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
