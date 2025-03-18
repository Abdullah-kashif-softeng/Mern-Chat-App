import express from "express"
import authRoutes from "./routes/auth.route.js"
import {db} from "./lib/db.js"
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js"
import cors from "cors"
const app=express();
app.use(express.json())
app.use(cookieParser())
app.use(cors(
   { origin:"http://localhost:5173",
    credentials:true
   }
))
app.use("/api/auth",authRoutes);
app.use("api/message",messageRoutes);


app.listen(3000,()=>{
    console.log("Hello worldking")
})