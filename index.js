import express from "express";
import mongoose from "mongoose";
import { createDB } from "./db.js";
import { mentorsStudentRouter } from "./mentorsStudentRouter.js";


// Init the server
const app = express();

// Middleware
app.use(express.json());

// Mentors-Students Router
app.use("/", mentorsStudentRouter);

// Starting the server
app.listen(3030, () => console.log("Server running on localhost:3030"));
