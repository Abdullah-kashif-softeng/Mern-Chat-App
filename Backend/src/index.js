import express from "express"
import authRoutes from "./routes/auth.route.js"
import {db} from "./lib/db.js"
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js"
const app=express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("api/message",messageRoutes);


app.listen(3000,()=>{
    console.log("Hello worldking")
})