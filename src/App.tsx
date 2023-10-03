import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="select-none bg-bg text-zinc h-screen w-screen overflow-y-scroll overflow-x-hidden scrollbar-none scroll-pt-12">
      <Navbar />
      <Main />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
