import express from "express"
import {checkAuth, login, logout, signup, updateProfile}from "../controllers/auth.controller.js"
import { authRoute } from "../middleware/auth.middleware.js";
const route=express.Router();

route.post("/signup",signup);
route.post("/login",login);
route.post("/logout",logout);

route.put("/update-profile",authRoute,updateProfile)

route.get("/check",authRoute,checkAuth)
export default route;