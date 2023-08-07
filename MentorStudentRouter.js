import express from "express"
import { Mentors, Students } from "./mentor-student-Schema.js";

const router = express.Router();


// 1. Create mentor API

router.post("/mentors", async (req, res) => {
    try {
        
        if (!req.body.role || !req.body.batch || !req.body.name) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const mentors = await Mentors.create(req.body);
        res.json(mentors);
    } catch (error) {
        console.error("Error creating mentor", error);
        res.status(500).json({ error: "Failed to create mentor" });
    }
});

// 2. Create Student API

router.post("/students", async (req, res) => {
    try {

        if (!req.body.gender || !req.body.qualification || !req.body.batch || !req.body.name) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const students = await Students.create(req.body);
        res.json(students);
    } catch (error) {
        console.error("Error Creating Student", error);
        res.status(500).json({ error: "Failed to Create Student" });
    }
});
  // 3.assign a student to a mentor

 router.put("/students/:studentId/assign-mentor/:mentorId", async (req, res) => {
    try {
      const { studentsId, mentorsId } = req.params;
  
      const students = await Students.findByIdAndUpdate(
        studentsId,
        { mentor: mentorsId },
        { new: true }
      );
      res.json(students);
    } catch (error) {
      console.error("Error assigning mentor to student", error);
      res.status(500).json({ error: "Faild to assign mentor to student" });
    }
  });
  
  // i.add multiple students to a mentor.

  router.put('/mentors/:mentorId/add-students', async (req, res)=>{
      try {
          const { mentorsId } = req.params;
          const { studentsIds } = req.body;
  
          const mentors = await Mentors.findById(mentorsId);
          if (!mentors) {
              return res.status(404).json({ error: "Mentor not Found" });
          }
  
          const students = await Students.updateMany(
              { _id: { $in: studenstIds }, mentor: { $ne: mentorsId} },
              { mentor: mentorsId}
              );
          res.json(students);
      } catch (error) {
          console.error("Error adding students to mentor", error);
          res.status(500).json({ error: "Faild to add Students to mentor" });
          
      }
  });
  
  // 4.assign or change the mentor for a particular student.

   router.put('/students/:studentId/assign-mentor/:mentorId',
   async (req, res) => {
      try {
          const { studentsId, mentorsId } = req.params;
          const students = await Students.findByIdAndUpdate(studentsId,
              { mentors: mentorsId }, { new: true});
              res.json(students);
      } catch (error) {
          console.error('Error Assigning/changing mentor for student', error);
          res.status(500).json({error: "Fails to assign/change mentor for students"});
      }
   });
  
   // 5.show all students for a particular mentor.

   router.get('/mentors/:mentorId/students', async (req, res) => {
      try {
          const { mentorsId } = req.params;
          const students = await Students.find({mentor: mentorsId });
          res.json(students);
  
      } catch (error) {
          console.error("Error fetching students for mentor", error);
          res.status(500).json({error: "Faild to fetch students for mentor" });
      }
   });
  
  // 6.show the previously assigned mentor for a particular student.
  
  router.get('/students/:studentId/previous-mentor', async (req, res) =>{
      try {
          const { studentsId } = req.params;
          const students = await Students.findById(studentId).populate('mentor', 'name');
          const PreviousMentors = students.mentors ? students.mentors.name : "No Previous mentor assigned";
          res.json(PreviousMentors);
          
      } catch (error) {
          console.error("Error to fetch Previous mentor for student", error);
          res.status(500).json( { error: "Faild to fetch previous mentor for student"});
      }
  });
  
export const mentorsStudentRouter =router