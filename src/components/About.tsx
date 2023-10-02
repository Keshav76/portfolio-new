import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { mern, frontend, ml, backend } from "../assets";
import SectionWrapper from "../utils/SectionWrapper";

const Card = ({
  skill,
  index,
}: {
  skill: { name: string; logo: string };
  index: number;
}) => {
  const delay = (index + 1) * 0.5;
  return (
    <motion.div
      variants={fadeIn("right", "spring", delay, 0.75) as any}
      className={` shadow-card grow green-pink-gradient rounded-lg text-white text-center`}
    >
      <div className="hover:shadow-card bg-bg m-[2px] rounded-lg p-5 h-[calc(100%-4px)] text-xl flex flex-col items-center justify-center">
        <img
          src={skill.logo}
          alt={skill.name}
          className="h-16 w-16 object-contain my-4"
        />
        {skill.name}
      </div>
    </motion.div>
  );
};

const mainSkills = [
  {
    name: "Full Stack Developement",
    logo: mern,
  },
  { name: "Frontend Developement", logo: frontend },
  { name: "Backend Developement", logo: backend },
  { name: "Machine Learning", logo: ml },
];

const About = () => {
  return (
    <div id="about" className="m-10">
      <motion.div
        variants={textVariant(0) as any}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Overview
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1) as any}
        className="leading-8 mt-4 text-justify"
      >
        Skilled <u>web developer</u>. Specialized in constructing robust web
        applications using <u>MERN Stack</u>. Possesses a deep understanding of{" "}
        <u>Machine Learning</u> and <u>Data Structures</u>. Determined towards
        Frontend Developement leveraging technology to create impactful
        solutions. Adept at <u>problem solving</u>. Eager to learn new
        technologies and tools to enhance my skills.
      </motion.div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4 ">
        {mainSkills.map((skill, i) => (
          <Card skill={skill} index={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About);
