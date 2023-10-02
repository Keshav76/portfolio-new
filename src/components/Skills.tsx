import {
  cpp,
  c,
  css,
  bootstrap,
  express,
  firebase,
  git,
  html,
  javascript,
  mongodb,
  mui,
  nodejs,
  python,
  reactjs,
  redux,
  tailwind,
  tensorflow,
  typescript,
} from "../assets";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const skills = [
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },
  { name: "Javascript", icon: javascript },
  { name: "Typescript", icon: typescript },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "ReactJS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Bootstrap", icon: bootstrap },
  { name: "NodeJS", icon: nodejs },
  { name: "ExpressJS", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "Tensorflow", icon: tensorflow },
];

const Skill = ({
  index,
  icon,
  name,
}: {
  icon: string;
  name: string;
  index: number;
}) => {
  const delay = 0.1 * index;
  return (
    <motion.div
      variants={fadeIn("right", "spring", delay, 0.5) as any}
      title={name}
      className="flex flex-col items-center justify-center aspect-square flex-[0_0_25%] sm:flex-[0_0_16%] md:flex-[0_0_12.5%] lg:flex-[0_0_10%]"
    >
      <img src={icon} alt="skill" className="w-3/4" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="m-10" id="skills">
      <motion.div
        variants={textVariant(0) as any}
        className="text-white mb-10 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Skills
      </motion.div>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills);
