import express from 'express';
import { mentorsStudentRouter } from './mentor-student-router.js'; // Updated filename
import { createDB } from './db.js';
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());

// Use the mentorsStudentRouter for your routes
app.use('/api', mentorsStudentRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
