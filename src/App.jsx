
    //css file //

import "./components/Navbar.css";
import "./components/Home.css";
import "./components/About.css";
import "./components/Skills.css";
import "./components/Experience.css";
import "./components/Projects.css";
import "./components/Education.css";
import "./components/Contact.css";
import "./components/Footer.css";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <main>
        <About />
         <Education />
        <Skills />
         <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
