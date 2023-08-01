const express = require("express");

const router = express.Router();

const profile = {
  name: "Shailee Yadav",
  email: "shaileeyadav130@gmail.com",
  phoneNo: 7348265799,
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  linkedin: "https://www.linkedin.com/in/shailee-yadav/",
  github: "https://github.com/shailee0414",
  academic: [
    {
      college: {
        branch: "Electronics Engineering",
        percentage: "75",
      },
    },
  ],
  projects: [
    {
      id: "1",
      title: "title 1",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
    {
      id: "2",
      title: "title 1",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
    {
      id: "3",
      title: "title 1",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
    {
      id: "4",
      title: "title 7",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
    {
      id: "5",
      title: "title 7",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
    {
      id: "6",
      title: "title 6",
      description: "description",
      websiteUrl: "",
      usedTechnology: [],
    },
  ],
};
router.get("/profile", (req, res) => {
  res.send(profile);
});
module.exports = router;
