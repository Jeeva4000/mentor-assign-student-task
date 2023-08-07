const mongoose = require("mongoose");
mongoose
  .connect(
   
    "mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/mentors-students",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // app.listen(3030, () => {
    //   console.log("Server started on Port 3030");
    // });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });