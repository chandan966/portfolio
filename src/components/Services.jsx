const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern and functional web applications using React.js, JavaScript, HTML5 and CSS3.",
  },
  {
    number: "02",
    title: "Responsive Design",
    description:
      "Creating responsive interfaces across desktop, tablet and mobile devices.",
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Developing REST APIs and database-driven applications with Java, Spring Boot and MySQL.",
  },
];
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">MY SERVICES</p>

          <h2>
            What I <span>Can Build</span>
          </h2>

          <p>
            Development services focused on creating modern,
            responsive and reliable web applications.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow">→</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;