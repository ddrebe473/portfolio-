import Bod from "./Components/Bod.jsx";
import Navbar from "./Components/navbar.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Bio from "./Components/Bio.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <div className="site">
      <Contact />
      <Navbar />
      <Bod />
      <Skills />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
