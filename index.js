const express = require("express");
 const db = require("./db.js")
const mentorstudentrouter = require("./mentorstudentrouter"); 

const app = express();

app.use(express.json());

app.use("/mentors", mentorstudentrouter);

app.listen(3030, () => console.log("server running in localhost:3030"));
