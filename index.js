// const express = require ("express");
// const db = require("./db.js")
// const mentorStudentRouter= require("./mentorstudentrouter.js");

// //init the server
//  const app = express();

// //middleware
// app.use(express.json());

// app.use("/mentors",mentorStudentRouter);

// //starting the server
// app.listen(3030,()=>console.log("server running in localhost:3030"))

const express = require("express");
const mentorStudentRouter = require("./mentorstudentrouter"); // Corrected the import path
const app = express();

app.use(express.json());

app.use("/mentors", mentorStudentRouter);

app.listen(3030, () => console.log("server running in localhost:3030"));
