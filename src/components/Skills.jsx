
const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "DSA with Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];

import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>Work With</span>
          </h2>

          <p>
            Technologies and programming skills I use to build
            modern web applications and solve problems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon-wrapper">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="skill-icon"
                />
              </div>

              <h3>{skill.name}</h3>

              <span className="skill-card-line"></span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
