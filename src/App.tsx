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
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ComputersCanvas from "./components/Computer";

const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <>
      {loading && (
        <div className="h-screen w-screen flex justify-center items-center bg-bg text-zinc">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <div className="opacity-0 absolute">
            <ComputersCanvas />
          </div>
        </div>
      )}
      {!loading && (
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
      )}
    </>
  );
};

export default App;
