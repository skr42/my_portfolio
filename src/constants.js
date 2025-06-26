// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import django from './assets/tech_logo/django.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import book_store from './assets/work_logo/book_store.png';
import ai_Poowered from './assets/work_logo/ai_powered.png';
import recipe from './assets/work_logo/recipe.png';
import ProblemPlexLogo from './assets/work_logo/ProblemPlexLogo.png';
import audio from './assets/work_logo/audio.png';
import gydexp_w from './assets/work_logo/gydexp_w.png';
import car from './assets/work_logo/car.png';
import Trip from './assets/work_logo/trip.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import Docker from './assets/tech_logo/Docker.png';
import k8s from './assets/tech_logo/k8s.jpg';
import aws from './assets/tech_logo/aws.png';
import langchain from './assets/tech_logo/langchain.png';
import ollama from './assets/tech_logo/ollama.png';
// Experience Section Logo's
import nts from './assets/company_logo/nts.jpeg';
// Education Section Logo's
import clg from './assets/education_logo/clg.png';
import cbse from './assets/education_logo/cbse.png';

// Project Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
       
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: django },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Docker', logo: Docker },
       { name: 'Langchain', logo: langchain },


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
      { name: 'TypeScript', logo: typescriptLogo },
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
      { name: 'Docker', logo: Docker },
      { name: 'Kebernetes', logo: k8s },
      { name: 'AWS', logo: aws },
      { name: 'ollama', logo: ollama },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nts,
      role: "Backend Developer",
      company: "NTS Nihon Global",
      date: "June 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both database and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
   
  ];
  
  export const education = [
  
    {
      id: 0,
      img: clg,
      school: "Indian Institute of Information Technology kottayam",
      date: "Nov 2025 - April 2026",
      grade: "8.3 CGPA",
      desc: "Currently persuing Btech (CSE) for IIITK. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BTech College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology- Btech (CSE)",
    },
    {
      id: 1,
      img: cbse,
      school: "Al-Momin Intenational School, Gaya",
      date: "Apr 2019 - March 2021",
      grade: "73%",
      desc: "I completed my class 12 education from Al-Momin International School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img:cbse,
      school: "Al-Momin Intenational School, Gaya",
      date: " March 2019",
      grade: "83%",
      desc: "I completed my class 10 education from Al-Momin International School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Book store Application",
      description:
        " A full-stack book store application that allows users to browse, search, and purchase books online. Built with React JS for the frontend and Node.js with Express for the backend, it features a user-friendly interface, secure payment integration, and a robust API for managing book data.",
      image:book_store,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "API","Express Js","MongoDB"],
      github: "https://github.com/skr42/BookStore_application",
      webapp: "https://github.com/skr42/BookStore_application",
    },
    {
      id: 1,
      title: "AI Powered Chat ",
      description:
        " An AI-powered code assistant that helps developers write code more efficiently. It uses OpenAI's API to provide code suggestions, completions, and debugging assistance in real-time.",
      image: ai_Poowered,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","OpenaiAPI"],
      github: "https://github.com/skr42/AI-Powered-Code-Assistant",
      webapp: "https://github.com/skr42/AI-Powered-Code-Assistant",
    },
    {
      id: 2,
      title: "Recipe-API",
      description:
        "A RESTful API for managing recipes, built with Django and Django REST Framework. It allows users to create, read, update, and delete recipes, with features like user authentication and image uploads.",
      image: recipe,
      tags: ["Django","Python","DRF","PostgreSQL","Docker","Github Actions"],
      github: "https://github.com/skr42/recipe-app-api",
      webapp: "https://github.com/skr42/recipe-app-api",
    },
    {
      id: 3,
      title: "ProblemPlex",
      description:
        "A platform for competitive programming enthusiasts to practice coding problems, track progress, and enhance problem-solving skills. Built with Django and React JS, it features a user-friendly interface and a wide range of coding challenges.",
      image: ProblemPlexLogo,
      tags: ["Django", "Python", "CSS", "HTML","JavaScript", "React JS","jinja2"],
      github: "https://github.com/skr42/ProblemPlex",
      webapp: "https://github.com/skr42/ProblemPlex",
    },
    {
      id: 4,
      title: "AudioBook Purchase Prediction",
      description:
      "A machine learning project that predicts whether a user will purchase an audiobook based on their listening habits and preferences. Built with Python using libraries like TensorFlow, Numpy, Pandas, Scikit-learn, Matplotlib, and Seaborn for data analysis and model training.",
      image: audio,
      tags: ["Python3", "TensorFlow", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      github: "https://github.com/skr42/Audiobooks-Purchase-Prediction",
      webapp: "https://github.com/skr42/Audiobooks-Purchase-Prediction",
    },
    {
      id: 5,
      title: "Automated whatsApp Message for POST",
      description:
        "A travel studio application that automates WhatsApp messages for post-trip feedback and inquiries. Built with Node.js, Express.js, n8n, and MongoDB, it integrates WhatsApp API to send automated messages to users after their trips.",
      image: gydexp_w,
      tags: ["CSS", "Node.js", "Express.js","n8n","MongoDB","whatsapp API"],
      github: "https://github.com/skr42/travel-studio-intern-assignment",
      webapp: "https://drive.google.com/file/d/15G377R-GasJC6KU1OYsRSSMPK-MXMbx8/view?usp=sharing",
    },
    {
      id: 6,
      title: "Car Parking Count using CV",
      description:
        "A computer vision project that counts the number of cars in a parking lot using OpenCV and Python. It processes video footage to detect and count vehicles, providing real-time analytics on parking space usage.",
      image: car,
      tags: ["Python", "cv2", "Matplotlib","NumPy", "OpenCV", "Flask"],
      github: "https://github.com/skr42/car_parking_counter",
      webapp: "https://github.com/skr42/car_parking_counter",
    },
    {
      id: 7,
      title: "Trip History Management",
      description:
        "A web application for managing and sharing trip history, built with Django and Jinja2. It allows users to log their trips, share experiences, and connect with fellow travelers. The application features user authentication, trip logging, and a responsive design.",
      image: Trip,
      tags: ["Django", "HTML", "CSS", "Auth","Jinja2"],
      github: "https://github.com/skr42/TripHistory",
      webapp: "https://github.com/skr42/TripHistory",
    },
  ];  