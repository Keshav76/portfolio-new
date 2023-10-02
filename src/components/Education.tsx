import { motion } from "framer-motion";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { sas, srm } from "../assets";

const educations = [
  {
    degree: "Bachelor of Technology",
    institute: "SRM Institute of Science and Technology",
    icon: srm,
    iconBg: "#fff",
    date: "Jun 2020 - Present",
    points: ["CGPA: 9.82 / 10", "Major in Computer Science and Engineering"],
  },
  {
    degree: "12th Standard",
    institute: "St. Anthony's Sr. Sec. School",
    icon: sas,
    iconBg: "#fff",
    date: "2019 - 2020",
    points: [
      "Scored 93% in the CBSE Board Examinations",
      "Major Subjects: Physics, Chemistry, Mathematics, Computer Science, English",
    ],
  },
  {
    degree: "10th Standard",
    institute: "St. Anthony's Sr. Sec. School",
    icon: sas,
    iconBg: "#fff",
    date: "2017 - 2018",
    points: [
      "Scored 86.8% in the CBSE Board Examinations",
      "Major Subjects: Mathematics, Science, Computer Science, English, Social Studies, Hindi",
    ],
  },
];

const EducationCard = ({
  education,
}: {
  education: {
    degree: string;
    institute: string;
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
      contentArrowStyle={{ borderRight: "7px solid #fff" }}
      date={education.date}
      iconStyle={{ background: education.iconBg, color: "#232631" }}
      icon={
        <div className="flex items-center justify-center">
          <img
            src={education.icon}
            alt={education.institute}
            className="w-full h-full aspect-square"
          />
        </div>
      }
    >
      <div className="text-white text-xl">{education.degree}</div>
      <div className="text-md">{education.institute}</div>
      <ul className="list-disc my-5 space-y-3 ml-5 text-sm text-secondary">
        {education.points.map((point, index) => (
          <li className="tracking-wider" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <div id="education" className="m-10">
      <motion.div
        variants={textVariant(0) as any}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Education
      </motion.div>
      <motion.div
        className="mt-10 flex flex-col"
        variants={fadeIn("left", "spring", 0.5, 0.5) as any}
      >
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard education={education} key={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education);
