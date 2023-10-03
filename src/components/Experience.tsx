import { motion } from "framer-motion";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import SectionWrapper from "../utils/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}) => {
  return (
    <VerticalTimelineElement
      className=""
      contentStyle={{ background: "#1d1836", color: "#fff " }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#232631" }}
      icon={
        <div className="flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-full h-full aspect-square"
          />
        </div>
      }
    >
      <div className="text-white text-xl">{experience.title}</div>
      <div className="text-md">{experience.company}</div>
      <ul className="list-disc list-inside text-sm text-secondary">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="m-10">
      <motion.div
        variants={textVariant(0) as any}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Work Experience
      </motion.div>
      <motion.div
        className="mt-10 flex flex-col"
        variants={fadeIn("right", "spring", 0.5, 0.5) as any}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience);
