// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';




// Project Section Logo's
import githubdetLogo from './assets/work_logo/javacoder.png';
import Chatlock from './assets/work_logo/Chatlock.png';
import coolname from './assets/work_logo/coolname.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "MERN Stack Project Developer",
    company: "Personal Project",
    date: "June 2024 - Present",
    desc: "Built a full-stack project using the MERN stack that includes user authentication, CRUD operations, and responsive design. Focused on writing clean code, API integration, and database management while improving problem-solving skills.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
    ],
  },
  {
    id: 1,
    // img: trainingLogo, // replace with training/hackathon logo
    role: "Web Development Trainee",
    company: "Online Training / Bootcamp",
    date: "Jan 2024 - April 2024",
    desc: "Completed intensive training in web technologies covering frontend and backend. Learned responsive UI design, RESTful APIs, and collaborative coding practices through assignments and real-world case studies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git/GitHub",
      "React.js",
    ],
  },
  {
    id: 2,
    // img: hackathonLogo, // replace with hackathon or college event logo
    role: "Hackathon Participant",
    company: "College Hackathon",
    date: "August 2023",
    desc: "Participated in a 24-hour coding hackathon where I worked with a team to develop a problem-solving web app. Learned teamwork, time management, and how to build a minimum viable product (MVP) quickly.",
    skills: [
      "Problem Solving",
      "Teamwork",
      "React.js",
      "APIs",
      "UI/UX",
    ],
  },
];

  
  // export const education = [
  //   
  //     id: 3,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },
  // ];
  
  export const projects = [
    {
      id: 0,
      title: "JavaCoder----Smart-Education SIH Problem",
      description:
        "JavaCoder is a government-level education platform designed to digitally empower schools and institutions. It provides role-based dashboards for Students, Teachers  — offering tools for online learning, class/course management,  Built using Node.js, Express.js, MongoDB, EJS, and Tailwind CSS, the platform follows the MVC architecture for clean code organization.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript",  "EJS", "API"],
      github: "https://github.com/coderirfannn/JavaCoder----Smart-Education.git",
      webapp: "https://javacoder-smart-education.onrender.com/",
    },
    {
      id: 1,
      title: "ChatLock ChatApp",
      description:
        "ChatLock (Version 1) is a real-time chat application focused on fast and secure one-to-one messaging. It was designed to provide smooth communication with instant delivery, clean UI, and essential chat features.",
      image: Chatlock,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/coderirfannn/chatlock-v1.git",
      webapp: "https://chatlock-v1.onrender.com",
    },
    {
      id: 2,
      title: "CoolNameGene",
      description:
        "CoolNameGenerator is a fun web app built with Node.js, Express, MongoDB, and EJS templating. It allows users to generate creative, random, and catchy names for projects, startups, games, or usernames. The app uses a simple and clean EJS frontend where users can input preferences (like style, category, or keywords), and it instantly displays unique name suggestions.",
      image: coolname,
      tags: ["Ejs", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/coderirfannn/CoolNameCreator.git",
      webapp: "https://coolnamegen.netlify.app/",
    },
   
 
  ];  