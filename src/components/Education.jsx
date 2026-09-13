
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      {/* Background Elements */}
      <div className="education-bg education-bg-one"></div>
      <div className="education-bg education-bg-two"></div>

      <div className="container education-container">

        {/* Section Heading */}
        <div className="section-heading education-heading">
          <p className="section-label">MY EDUCATION</p>

          <h2>
            Academic <span>Journey</span>
          </h2>

          <p>
            My journey in Computer Science & Engineering, building a strong
            foundation in software development and problem solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">

          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Education Item */}
          <div className="education-item">

            {/* Timeline Point */}
            <div className="timeline-point">
              <span></span>
            </div>

            {/* Education Card */}
            <div className="education-card">

              {/* University Logo */}
              <div className="education-logo-wrapper">
                <div className="education-logo">
                  <img
                    src="/photos/dbatu-logo.png"
                    alt="DBATU University Logo"
                  />
                </div>

                <div className="logo-glow"></div>
              </div>

              {/* Education Content */}
              <div className="education-content">

                {/* Top Information */}
                <div className="education-top">
                  <span className="education-year">
                    2023 — 2027
                  </span>

                  <span className="education-status">
                    ● Currently Pursuig
                  </span>
                </div>

                {/* Degree */}
                <h3>
                  B.Tech in Computer Science & Engineering
                </h3>

                <p className="education-intro">
                  Bachelor of Technology in Computer Science & Engineering
                  with a focus on software development, programming and
                  problem solving.
                </p>

                {/* University */}
                <div className="education-details">
                  <div className="education-detail">
                    <div className="detail-icon">🎓</div>

                    <div>
                      <small>UNIVERSITY</small>
                      <p>
                        Dr. Babasaheb Ambedkar Technological University,
                        Lonere
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="education-focus">
                  <span>Computer Science Engineering</span>
                    
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
