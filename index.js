const express = require ("express");
const db = require("./db.js")
// const mentorSchema = require
//  import { mentorSchema } from "./mentorSchema.js";
//  const  studentSchema = require("./studentSchema.js") ;

const mentorStudentRouter= require("./mentorstudentrouter.js");

//init the server
 const app = express();

//middleware
app.use(express.json());

app.use("/mentors",mentorStudentRouter);

//starting the server
app.listen(3030,()=>console.log("server running in localhost:3030"))