const express = require("express");

const router = express.Router();

const profile = {
  profileData: {
    name: "Shailee Yadav",
    email: "shaileeyadav130@gmail.com",
    // phoneNo: 7348265799,
    nationality: "India",
    address: "Ayodhya, Uttar Pradesh",
    about: `Full-Stack Developer with 2 years of experience building scalable web and mobile applications using React.js, React Native, Node.js, Python, and MongoDB. Skilled in developing RESTful APIs, integrating third-party services (Firebase, Shopify, WhatsApp API), and optimizing performance across the stack. Delivered impactful projects including a medical booking system, marketing automation flows, and real-time chat features. Passionate about clean architecture, continuous learning, and building solutions that enhance user experience and business outcomes. Currently serving notice period and open for immediate opportunities.`,
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
      title: "Full-Stack Developer",
      duration: "June 2023 – Present",
      organization: "Irin AI Private Limited",
      description: `Developed and deployed multiple client platforms including e-commerce and medical booking systems using React and Node.js. Launched Irin app with Firebase Cloud Messaging for real-time notifications. Built WhatsApp chatbot campaigns using Meta Business API and integrated Shopify APIs for event-based marketing. Implemented subscription billing using Chargebee and Stripe. Built scalable RESTful APIs with Node.js and Python, reducing response time by 30%. Enhanced app performance by 35% with lazy loading and optimized React components. Used SCSS, Redux-Saga, and Context API for consistent, maintainable UIs.`
    },
    {
      title: "Flutter Application Developer Intern",
      duration: "April 2023 – June 2023",
      organization: "ONGC Tripura Power Company Ltd",
      description: `Led development of a mobile app using Flutter, GetX, and Figma, focused on intuitive UI and smooth UX. Integrated Firebase push notifications and implemented reusable components. Collaborated with cross-functional teams to deliver a functional solution for OTPC. Gained practical experience in GitHub, MySQL, and agile development practices.`
    }
  ],


  skills: [
    { skillName: "REACT JS", skillValue: 85 },
    { skillName: "REACT NATIVE", skillValue: 75 },
    { skillName: "NODE JS", skillValue: 85 },
    { skillName: "JAVASCRIPT", skillValue: 80 },
    { skillName: "TYPESCRIPT", skillValue: 70 },
    { skillName: "REDUX", skillValue: 70 },
    { skillName: "CONTEXT API", skillValue: 75 },
    { skillName: "MONGO DB", skillValue: 80 },
    { skillName: "PYTHON", skillValue: 70 },
    { skillName: "REST API", skillValue: 85 },
    { skillName: "FIREBASE", skillValue: 75 },
    { skillName: "FLUTTER", skillValue: 50 },
    { skillName: "SCSS", skillValue: 85 },
    { skillName: "BOOTSTRAP", skillValue: 85 },
    { skillName: "HTML", skillValue: 90 },
    { skillName: "CSS", skillValue: 85 },
    { skillName: "SOCKET.IO", skillValue: 70 },
    { skillName: "GIT & GITHUB", skillValue: 85 },
    { skillName: "CHARGEBEE", skillValue: 65 },
    { skillName: "STRIPE", skillValue: 65 },
    { skillName: "DSA", skillValue: 70 },
    { skillName: "C++", skillValue: 80 },
    { skillName: "GETX (Flutter)", skillValue: 60 },
    { skillName: "FIGMA", skillValue: 70 },
    { skillName: "AGILE / SCRUM", skillValue: 80 },
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
