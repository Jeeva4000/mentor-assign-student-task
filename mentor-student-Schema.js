import mongoose from "mongoose";

//data models for Mentor and Student using Mongoose.
const mentorsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  });
  
  const studentsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mentors: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentors",
    },
  });
  
  const Mentors = mongoose.model("Mentors", mentorsSchema);
  const Students = mongoose.model("Students", studentsSchema);

  export {Mentors,Students}