
const projects = [
  {
    title: "Car Rental App",
    description:
      "A full-stack web application for buying, selling, and renting cars. Users can explore available cars, view detailed information, and interact with a modern and responsive interface.",
    technologies: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
    ],
    category: "Full Stack Web App",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern and responsive personal portfolio website showcasing my education, skills, projects, and development journey with a clean and professional interface.",
    technologies: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
    ],
    category: "Full Stack Web App",
  },
];

import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Projects I've <span>Built</span>
          </h2>

          <p>
            Here are some of the projects I have built while
            developing my web development and programming skills.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-image">
                <span>{project.title}</span>
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">

                  <a href="#" className="project-btn">
                    Live Demo
                  </a>

                  <a href="#" className="project-btn outline">
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
