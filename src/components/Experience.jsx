import "./Experience.css";

const experiences = [
  {
    role: "Web Development Intern",
    company: "ShadowFox",
    type: "Internship",
    date: "Sep 2026 - Present",
    location: "Remote",
    category: "Web Development",
  },
  {
    role: "Campus Ambassador, Marketing Intern",
    company: "Corizo Edutech Private Limited",
    type: "Part-time",
    date: "Oct 2025 - Nov 2025",
    location: "Beed · Remote",
    description:
      "Represented Corizo on campus by promoting their programs and engaging students through social media and events.",
  },
  {
    role: "Command & Control Centre Operator",
    company: "Starconnect Business Solutions Pvt Ltd",
    type: "Full-time",
    date: "Jul 2024 - Oct 2025",
    location: "Navi Mumbai, Maharashtra, India · Remote",
  },
  {
    role: "STEM",
    company: "Deloitte",
    type: "Internship",
    date: "Jun 2025 · 1 month",
    location: "Remote",
  },
  {
    role: "Technology & Software Engineering Job Simulation",
    company: "Accenture Brasil",
    type: "Internship",
    date: "Jun 2025 · 1 month",
    location: "Remote",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Section Heading */}
        <div className="experience-heading">
          <p className="experience-label">MY EXPERIENCE</p>

          <h2>
            Experience & <span>Internships</span>
          </h2>

          <p className="experience-subtitle">
            My professional experience, internships, and practical
            opportunities that have helped me develop technical and
            professional skills.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div
              className="experience-item"
              key={`${experience.company}-${experience.role}`}
            >
              {/* Timeline */}
              <div className="experience-timeline-point">
                <span></span>
              </div>

              {/* Experience Card */}
              <div className="experience-card">

                <div className="experience-card-top">

                  <div className="experience-icon">
                    {index === 0
                      ? "WD"
                      : index === 1
                      ? "CA"
                      : index === 2
                      ? "CC"
                      : index === 3
                      ? "ST"
                      : "SE"}
                  </div>

                  <div className="experience-title">
                    <h3>{experience.role}</h3>

                    <h4>
                      {experience.company}
                      <span> · {experience.type}</span>
                    </h4>
                  </div>

                </div>

                <div className="experience-meta">
                  <span>{experience.date}</span>
                  <span>{experience.location}</span>
                </div>

                {experience.description && (
                  <p className="experience-description">
                    {experience.description}
                  </p>
                )}

                {experience.category && (
                  <div className="experience-category">
                    <span className="category-icon">◇</span>
                    <span>{experience.category}</span>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
