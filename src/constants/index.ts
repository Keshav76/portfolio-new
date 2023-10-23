import { mern, frontend, ml, backend, book } from "../assets";
import { sas, srm } from "../assets";
import { bhc, iitg, karo } from "../assets";
import {
  cpp,
  numpy,
  pandas,
  c,
  css,
  sql,
  bootstrap,
  express,
  firebase,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  python,
  reactjs,
  redux,
  tailwind,
  tensorflow,
  typescript,
} from "../assets";
import { yt, portfolio, ide, india, chat } from "../assets";

export const summary = `Skilled web developer. Specialized in constructing robust web
applications using MERN Stack. Possesses a deep understanding of
Machine Learning and Data Structures. Determined towards
Frontend Developement leveraging technology to create impactful
solutions. Adept at problem solving. Eager to learn new
technologies and tools to enhance my skills.`;

export const mainSkills = [
  {
    name: "Full Stack Developement",
    logo: mern,
  },
  { name: "Frontend Developement", logo: frontend },
  { name: "Backend Developement", logo: backend },
  { name: "Machine Learning", logo: ml },
];

export const educations = [
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

export const experiences = [
  {
    title: "Summer Intern",
    company: "CSE Dept. IIT Guwahati",
    icon: iitg,
    iconBg: "#fff",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Analyzed the use of Domain-Specific Accelerators for Deep Neural Networks",
      "Developed mapping for chip architectures for different neural networks.",
    ],
  },
  {
    title: "Web Developement Intern",
    company: "Bridge Healthcare - IIT Madras",
    icon: bhc,
    iconBg: "#fff",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Built the Patient Web Application along with a team of 5 members.",
      "ReactJS, Material UI, and Figma for creating the UI of the webpage.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Karo Startup India Pvt. Ltd.",
    icon: karo,
    iconBg: "#fff",
    date: "Mar 2022 - Apr 2022",
    points: [
      "Worked with the front-end team to build the student ambassador website",
      "Built the website using ReactJS and Bootstrap",
    ],
  },
];

export const skills = [
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
  { name: "Bootstrap", icon: bootstrap },
  { name: "NodeJS", icon: nodejs },
  { name: "ExpressJS", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "Numpy", icon: numpy },
  { name: "Pandas", icon: pandas },
  { name: "Tensorflow", icon: tensorflow },
];

export const projects = [
  {
    title: "Portfolio",
    description: "Built with React and Three.Js for 3D animations",
    githubLink: "https://github.com/Keshav76/portfolio-new",
    liveDemoLink: "https://keshav-banka.vercel.app/",
    image: portfolio,
  },
  {
    title: "Youtube Clone",
    description:
      "Built with MERN Stack and Firebase for video storage and authentication",
    githubLink: "https://github.com/Keshav76/youtube-clone",
    liveDemoLink: "https://youtube-9r1a.onrender.com/",
    image: yt,
  },
  {
    title: "Chit-Chat",
    description:
      "A secure chat application built with React and Firebase using RSA encryption",
    githubLink: "https://github.com/Keshav76/chit-chat",
    liveDemoLink: "https://kb-chit-chat.vercel.app/",
    image: chat,
  },
  {
    title: "Online IDE",
    description:
      "Built with React, with features like syntax highlighting, auto-completion, etc.",
    githubLink: "https://github.com/Keshav76/Frontend-IDE",
    liveDemoLink: "https://keshav76.github.io/Frontend-IDE/",
    image: ide,
  },
  {
    title: "Incredible India",
    description: "A website for promoting tourism in India",
    githubLink: "https://github.com/Keshav76/Incredible-India",
    liveDemoLink: "https://keshav76.github.io/Incredible-India/",
    image: india,
  },
  {
    title: "Book Recommender System",
    description: "Collaborative Filtering based Book Recommender System",
    githubLink: "https://github.com/Keshav76/Book-Recommender-System",
    liveDemoLink: "https://kb-book-recommender.onrender.com",
    image: book,
  },
];
