import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/MyUserRoute.js";
import contactRouter from "./routes/MyContactRoute.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());
//load enviroment

//Connect to mongodb
const PORT = 5000;
//commecting to the string in env file
mongoose.connect(process.env.MONGODB_URI);
//refrencing the coonection string
const db = mongoose.connection;
//Logging in errors during the db connection
db.on("error", (error) => { console.error(error) });
//Logging in message when datavase is connected
db.once("open", () => { console.log("Connected to MongoDB") });
//Listening and connecting to the port
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
app.use("/user", userRouter);
app.use('/contact', contactRouter);

