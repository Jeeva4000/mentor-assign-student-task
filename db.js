
  import mongoose from "mongoose"

export async function createDB(){

    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        mongoose.connect("mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/mentors-students",params)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);  
    }
}
createDB();