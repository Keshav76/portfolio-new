import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { userImg } from "../assets";
import SectionWrapper from "../utils/SectionWrapper";

const NavLinks = () => {
  return (
    <>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#home"
      >
        Home
      </a>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#education"
      >
        Education
      </a>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#experience"
      >
        Experience
      </a>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#skills"
      >
        Skills
      </a>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#projects"
      >
        Projects
      </a>
      <a
        className="hover:text-shiny py-1 px-4 rounded-xl"
        href="#contact"
      >
        Contact
      </a>
    </>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full py-3 fixed z-20 bg-bg top-0 flex px-6 sm:px-14 items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={userImg} alt="KB" className="w-8" />
        Keshav Banka
      </div>
      <div className="md:flex hidden">
        <NavLinks />
      </div>
      <div className="md:hidden flex relative">
        <FontAwesomeIcon
          icon={toggle ? faClose : faBars}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col gap-2 px-4 py-2 absolute x-20 bg-shiny text-white  top-8 left-[-100px] rounded-lg`}
        >
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Navbar);
