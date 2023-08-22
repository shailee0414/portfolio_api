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
      "Hello! I'm Shailee Yadav, a Frontend Developer with 1 year of professional experience. My skill set encompasses a diverse range of areas, including React, Redux, Flutter, C++, JavaScript, HTML5, and CSS, among other technologies. My expertise extends to various software development life cycle (SDLC) methodologies, such as Agile, Waterfall, and DevOps. I actively participate in every stage of the development process, starting from requirement gathering to the final steps of implementation, testing, and deployment. My strengths lie in my adept problem-solving abilities, and my enthusiasm for continuous learning underscores my value as an asset to any organization in search of a skilled and dedicated Software Engineer.",
    linkedin: "https://www.linkedin.com/in/shailee-yadav/",
    github: "https://github.com/shailee0414",
  },

  academic: [
    {
      title: "BACHELOR DEGREE",
      duration: "JULY 2019 - JUNE 2023",
      organization: "REC KANNAUJ UTTAR PRADESH",
      description:
        "I have successfully  completed B.Tech program with a specialization in Electronics Engineering, consistently maintaining a stellar academic performance with a GPA of 7.8 (equivalent to 78%). Notably, I actively participated in a collaborative team project centered around Plant Leaf Disease Detection using CNN. This experience showcased my proficiency in effective communication and demonstrated strong teamwork capabilities.",
    },
    {
      title: "INTERMEDIATE",
      duration: "MAY 2016 - APRIL 2018",
      organization: "A R ACADEMIC INTER COLLEGE FAIZABAD",
      description:
        "I have successfully completed the 12th standard curriculum with a notable academic achievement, securing a commendable 80.6%. During this academic journey, I prominently showcased exceptional problem-solving skills and exhibited a profound grasp of theoretical principles in physics, chemistry, and mathematics.",
    },
    {
      title: "HIGH SCHOOL",
      duration: "APRIL 2014 - MAY 2016",
      organization: "A R ACADEMIC INTER COLLEGE FAIZABAD",
      description:
        "I have successfully completed the 10th standard curriculum with a remarkable academic achievement. My outstanding performance led me to attain the position of School Topper with a score of 90%.",
    },
  ],
  experience: [
    {
      title: "FULLSTACK DEVELOPER",
      duration: "AUGUST 2023 - PRESENT",
      organization: "IRIN AI PRIVATE LIMITED",
      description:
        "I'm at Irin AI, a startup focused on digital health record management and customer engagement through AI. My role is utilizing React's component-based structure and state management concepts to craft dynamic and user-friendly interfaces. To build the backend, I'm using Node.js and MongoDB to develop a robust RESTful API. Additionally, I leveraged Redux to seamlessly integrate the API, ensuring smooth interactions.",
    },
    {
      title: "REACT DEVELOPER INTERN",
      duration: "JUNE 2023 - JULY 2023",
      organization: "IRIN AI PRIVATE LIMITED",
      description:
        "As an intern at Irin AI, a startup focused on digital health record management and customer engagement through AI. My role involved utilizing React's component-based structure and state management concepts to craft dynamic and user-friendly interfaces. To build the backend, I employed Node.js and MongoDB to develop a robust RESTful API. Additionally, I leveraged Redux to seamlessly integrate the API, ensuring smooth interactions. ",
    },
    {
      title: "FLUTTER APPLICATION DEVELOPER INTERN",
      duration: "APRIL 2023 - JUNE 2023",
      organization: "ONGC TRiPURA POWER COMPANY",
      description:
        "I played a pivotal role in delivering visually captivating user interfaces while collaborating seamlessly with cross-functional teams to develop OTPC's software solution. As the leader of mobile app development using Flutter and Figma, I prioritized a seamless user experience and implemented a comprehensive testing suite. In crafting reusable software components, I adeptly employed both stateful widgets and GetX state management to effectively handle dynamic data.",
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
      title: "Contact management app",
      description:
        "I created a user-friendly interface that makes it easy to add, edit, and remove contacts, making the app more enjoyable to use. To keep things running smoothly and update data instantly, I used GetX for managing the app's internal state.",
      gitRepo: "https://github.com/shailee0414/contact_app",
      usedTechnology: ["Flutter", "Dart", "GetX", "Figma"],
    },
    {
      id: "2",
      title: "Marvel Api integration",
      description:
        "Built this engaging React app by connecting it with the Marvel API. I used Redux to manage the app's data and Thunk for handling actions that happen at different times. The app's interface was designed to be user-friendly, letting users easily discover and find Marvel characters and comics. I also added a powerful search feature with advanced filters, making it more fun and useful to explore.",
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
      title: "GitHub GraphQL API integration",
      description:
        "I created this React application that smoothly connects to the GitHub GraphQL API. This lets users easily manage repositories right from the app's interface. By using React and JavaScript, I designed an interactive and user-friendly system for handling GitHub repositories. I made use of GraphQL queries and mutations to interact with the GitHub API, enabling users to perform actions like creating, reading, updating, and deleting repositories.",
      gitRepo: "https://github.com/shailee0414/GithubGraphqlApiImplementation",
      usedTechnology: ["React", "JavaScript", "Html", "Css"],
    },
    {
      id: "4",
      title: "CoinCap API integration ",
      description:
        "This React application  connects with the CoinCap API. I employed API requests to pull real-time market values of cryptocurrencies and companies from the CoinCap API. To manage the application state and handle data flow seamlessly, I utilized a combination of React, Redux, and the Redux Saga middleware, ensuring efficient management of both synchronous and asynchronous operations.",
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
      title: " OpenLibrary API integration - Book Search ",
      description:
        "This feature-rich React application that seamlessly connects with the OpenLibrary API, enhancing it with Redux and Redux Thunk middleware. By utilizing the OpenLibrary API, the application fetches an extensive array of book details, including titles, authors, publication information, and cover images. Notably, I designed and implemented a robust search function that empowers users to search for books using titles and author names, delivering accurate and real-time search results.",
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
      title: "YouTube video search ",
      description:
        "I made an interactive React app that smoothly connects with the YouTube API. This lets users search for videos using keywords, check out the search results, and see more details about each video. I used the YouTube API to enable searches based on what users typed. I also created components to show the videos, so users can watch them right in the app.",
      gitRepo: "https://github.com/shailee0414/youtube-video-search",
      usedTechnology: ["React", "JavaScript", "Css", "Html"],
    },
  ],
};
router.get("/profile", (req, res) => {
  res.send(profile);
});
module.exports = router;
