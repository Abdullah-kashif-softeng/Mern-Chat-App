import express from "express"
import authRoutes from "./routes/auth.route.js"
import {db} from "./lib/db.js"
const app=express();
app.use(express.json())
app.use("/api/auth",authRoutes);


app.listen(3000,()=>{
    console.log("Hello worldking")
})