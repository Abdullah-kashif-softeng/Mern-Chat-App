import express from "express"
import {login, signup}from "../controllers/auth.controller.js"
const route=express.Router();

route.post("/signup",signup);
route.post("/login",login)
route.get("/signout",(req,res)=>{
    res.send("signout route");
})
export default route;