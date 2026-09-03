import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Eduction from "./components/Eduction";
import Skill from "./components/My Skill";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Home />
      <Eduction />
      <Skill />
      <Contact />
    </>
  );
}

export default App;