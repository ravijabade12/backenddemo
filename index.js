const express = require("express");
require("dotenv").config();
const app = express();

const data = {
  company: "TechCorp",
  employeeCount: 250,
  remoteWork: true,
  headquarters: {
    city: "San Francisco",
    country: "USA",
  },
  departments: ["Engineering", "Marketing", "Sales"],
  activeProjects: [
    {
      projectId: "PROJ-101",
      name: "Cloud Migration",
      budget: 50000.0,
    },
    {
      projectId: "PROJ-102",
      name: "AI Integration",
      budget: 75000.0,
    },
  ],
  ceo: null,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("ravijabade12");
});

app.get("/ravi", (req, res) => {
  res.send("<h1>hello ravi</h1>");
});

app.get("/github", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
