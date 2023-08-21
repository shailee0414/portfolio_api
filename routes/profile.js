const express = require("express");

const router = express.Router();

const profile = {
  profileData: {
    name: "Shailee Yadav",
    email: "shaileeyadav130@gmail.com",
    phoneNo: 7348265799,
    nationality: "India",
    address: "Ayodhya, Uttar Pradesh",
    about:
      "Hello ! I'm Shailee Yadav. Frontend Developer with 1 year of experience. My skill set includes many areas, such as React, Redux, Flutter, C++, JavaScript, HTML5, CSS and other technologies. I am well‐versed in various SDLC methodologies such as Agile, Waterfall, and DevOps. I actively engage in the entire development process, from requirement gathering to implementation, testing, and deployment. My strong problem‐solving skills and passion for continuous learning make me a valuable asset to any organization seeking a skilled Software Engineer.",
    linkedin: "https://www.linkedin.com/in/shailee-yadav/",
    github: "https://github.com/shailee0414",
  },

  academic: [
    {
      title: "BACHELOR DEGREE",
      duration: "JULY 2019 - JUNE 2023",
      organization: "REC KANNAUJ UTTAR PRADESH",
      description:
        "Successfully completed a comprehensive B.Tech program with a focus on Electronics Engineering. Maintained a strong academic record throughout the program, with a 7.8 GPA (78 %). Collaborated on team project (Plant Leaf Disease Detection using CNN ), demonstrating effective communication and teamwork abilities.",
    },
    {
      title: "INTERMEDIATE",
      duration: "MAY 2016 - APRIL 2018",
      organization: "A R ACADEMIC INTER COLLEGE FAIZABAD",
      description:
        "Successfully completed 12th standard curriculum with a notable academic achievement, earning a 80.6 % . Demonstrated exceptional problem-solving skills and deep understanding of theoretical principles in physics, chemistry and maths",
    },
    {
      title: "HIGH SCHOOL",
      duration: "APRIL 2014 - MAY 2016",
      organization: "A R ACADEMIC INTER COLLEGE FAIZABAD",
      description:
        "Successfully completed 10th standard curriculum with a notable academic achievement. Achieved the position of School Topper for the 90% with outstanding academic performance. ",
    },
  ],
  experience: [
    {
      title: "FULLSTACK DEVELOPER",
      duration: "AUGUST 2023 - PRESENT",
      organization: "IRIN AI PRIVATE LIMITED",
      description:
        " Working at Irin AI, a startup specializing in digital health record management and customer engagement using AI. Leveraged React’s component‐based architecture and state management principles to design dynamic and user‐friendly interfaces. Worked with NodeJs, MongoDB to create Rest-Full  Api. Utilized Redux for seamless API integration.",
    },
    {
      title: "REACT DEVELOPER INTERN",
      duration: "JUNE 2023 - JULY 2023",
      organization: "IRIN AI PRIVATE LIMITED",
      description:
        " Working at Irin AI, a startup specializing in digital health record management and customer engagement using AI. Leveraged React’s component‐based architecture and state management principles to design dynamic and user‐friendly interfaces. Worked with NodeJs, MongoDB to create Rest-Full  Api. Utilized Redux for seamless API integration. ",
    },
    {
      title: "FLUTTER APPLICATION DEVELOPER INTERN",
      duration: "APRIL 2023 - JUNE 2023",
      organization: "ONGC TRiPURA POWER COMPANY",
      description:
        "Successfully delivered visually appealing user interfaces and collaborated with cross-functional teams to build the software solution for OTPC. Led the mobile app development using Flutter and Figma, focusing on a smooth user experience and a holistic testing suite. Utilized both stateful widgets and GetX state management to handle dynamic data in reusable software components",
    },
  ],

  skills: [
    {
      skillName: "REACT JS",
      skillValue: 70,
    },
    {
      skillName: "JAVASCRIPT",
      skillValue: 70,
    },
    {
      skillName: "REDUX",
      skillValue: 60,
    },
    {
      skillName: "NODE JS",
      skillValue: 60,
    },
    {
      skillName: " MONGO DB",
      skillValue: 50,
    },
    {
      skillName: " FLUTTER",
      skillValue: 50,
    },
    {
      skillName: "HTML",
      skillValue: 90,
    },
    {
      skillName: "SCSS",
      skillValue: 90,
    },
    {
      skillName: "BOOTSTRAP",
      skillValue: 80,
    },
    {
      skillName: "DSA",
      skillValue: 70,
    },
    {
      skillName: "C++",
      skillValue: 80,
    },
  ],

  projects: [
    {
      id: "1",
      title: "Contact Management App",
      description:
        "Designed and implemented an intuitive user interface for creating, editing, and deleting contacts, enhancing the user experience. Utilized GetX for state management, ensuring efficient and reactive data handling throughout the application.",
      gitRepo: "https://github.com/shailee0414/contact_app",
      usedTechnology: ["Flutter", "Dart", "GetX", "Figma"],
    },
    {
      id: "2",
      title: "Marvel Api Integration",
      description:
        "Developed a dynamic and interactive React application by integrating the Marvel API, utilizing Redux for state management and Thunk for asynchronous actions. Designed and implemented a user-friendly interface that allowed users to explore and search for Marvel characters and comics etc. Integrated robust search functionality with advanced filtering options, improving user engagement ",
      gitRepo: "https://github.com/shailee0414/marvelStudio",
      usedTechnology: [
        "React.js",
        "Redux",
        "Redux-Thunk",
        "Javascript",
        "Css",
        "Html",
      ],
    },
    {
      id: "3",
      title: "GitHub GraphQL API Integration",
      description:
        "Developed a robust React application that seamlessly integrates with the GitHub GraphQL API, enabling users to create, read, update, and delete repositories directly from the application interface.Utilized React and JavaScript to build an interactive and user-friendly application for GitHub repository management. Implemented GraphQL queries and mutations to interact with the GitHub API, allowing users to perform CRUD operations on repositories.",
      gitRepo: "https://github.com/shailee0414/GithubGraphqlApiImplementation",
      usedTechnology: ["React", "JavaScript", "Html", "Css"],
    },
    {
      id: "4",
      title: "CoinCap API Integration ",
      description:
        "Developed a React application that integrates with the CoinCap API, Implemented API requests to the CoinCap API to retrieve current market values of cryptocurrencies and companies. Utilized React, Redux, and Redux Saga middleware to efficiently manage application state and asynchronous data flow.",
      gitRepo: "https://github.com/shailee0414/Coincap/tree/main",
      usedTechnology: [
        "React",
        "Redux",
        "Redux-saga",
        "Javascript",
        "Html",
        "Css",
      ],
    },
    {
      id: "5",
      title: " OpenLibrary API Integration - Book Search ",
      description:
        "Developed a feature-rich React application utilizing Redux and Redux Thunk middleware to seamlessly integrate with the OpenLibrary API. Leveraged the OpenLibrary API to retrieve a comprehensive list of books, including details like titles, authors, publication information, and covers. Designed and implemented a powerful search feature enabling users to search for books by title and author name, providing accurate and real-time results.",
      gitRepo: "https://github.com/shailee0414/book_library/tree/main",
      usedTechnology: [
        "React",
        "Redux",
        "Redux-Thunk",
        "JavaScript",
        "Html",
        "Css",
      ],
    },
    {
      id: "6",
      title: "YouTube Video Search ",
      description:
        "Developed a dynamic React application that seamlessly integrates with the YouTube API, allowing users to search for videos using keywords, view search results, and access video details. Integrated the YouTube API to facilitate video searches based on user-entered keywords. Designed and implemented video display components, allowing users to watch videos directly within the application.",
      gitRepo: "https://github.com/shailee0414/youtube-video-search",
      usedTechnology: ["React", "JavaScript", "Css", "Html"],
    },
  ],
};
router.get("/profile", (req, res) => {
  res.send(profile);
});
module.exports = router;
