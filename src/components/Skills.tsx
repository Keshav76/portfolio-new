import { motion } from "framer-motion";
import SectionWrapper from "../utils/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

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
      className="flex flex-col  items-center justify-center aspect-square flex-[0_0_25%] sm:flex-[0_0_16%] md:flex-[0_0_12.5%] lg:flex-[0_0_10%]"
    >
      <img
        src={icon}
        alt="skill"
        className="w-3/4 hover:scale-150 transition-all"
      />
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
