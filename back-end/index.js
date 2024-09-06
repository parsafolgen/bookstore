import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRouter from "./route/user.route.js "
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI


app.use(cors())
app.use(express.json())

try{
  mongoose.connect(URI,{
    useNewUrlparser : true,
    useUnifiedTopology : true,
  })
  console.log("connected to mongodb")
}catch(err){
    console.log("Error :" + err)
  }

app.use("/book", bookRoute)
app.use("/user", userRouter)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})