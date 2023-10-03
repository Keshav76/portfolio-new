import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { projects } from "../constants";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
  project: {
    title: string;
    description: string;
    githubLink: string;
    liveDemoLink: string;
    image: string;
  };
  index: number;
};

const ProjectCard = ({ project, index }: Props) => {
  useEffect(() => {
    const card = document.getElementById(`project-card-${index}`);
    card?.addEventListener("mouseenter", () => {
      (card.lastElementChild as HTMLDivElement).style.transform =
        "translateY(0)";
    });
    card?.addEventListener("mouseleave", () => {
      (card?.lastElementChild as HTMLDivElement).style.transform =
        "translateY(100%)";
    });
  });

  const delay = (index + 1) * 0.5;
  return (
    <motion.div
      id={`project-card-${index}`}
      variants={fadeIn("right", "spring", delay, 0.75) as any}
      className={`overflow-hidden relative grow green-pink-gradient rounded-lg text-white text-center`}
    >
      <div className="bg-bg m-[2px] rounded-lg h-[calc(100%-4px)] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain m-0"
        />
      </div>
      <div className="transition-all translate-y-full duration-300 flex absolute top-[2px] left-0 right-0 bottom-[2px] green-pink-gradient rounded-lg flex-col items-center justify-center">
        <div className="text-2xl font-bold">{project.title}</div>
        <div className="text-white-100 max-w-xs">{project.description}</div>
        <div className="mt-5">
          <a
            target="_blank"
            href={project.githubLink}
            className="rounded-lg mx-5 border bg-[rgb(255,255,255,0.10)] border-white px-2 py-1"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          {project.liveDemoLink !== "" && (
            <a
              target="_blank"
              href={project.liveDemoLink}
              className="rounded-lg mx-5 border bg-[rgb(255,255,255,0.10)] border-white px-2 py-1"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="m-10" id="projects">
      <motion.div
        variants={textVariant(0) as any}
        className="overflow-hidden text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Projects
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1) as any}
        className="leading-8 mt-4 hidden md:block"
      >
        Following projects showcases my skills and experience through real-world
        applications. Each project is a stepping stone in my journey to become a
        better developer. Every project is briefly described with a Github link
        and a live demo link. Feel free to check them out. It reflects my
        passion for learning and building new things.
      </motion.div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects);
