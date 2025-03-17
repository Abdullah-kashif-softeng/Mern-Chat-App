import { getmessages, getsidebarusers, sendMessage } from "../controllers/message.controller.js";
import { authRoute } from "../middleware/auth.middleware.js";
import Message from "../models/Message.model.js";
import express from "express"
const router=express.Router()

router.get("/users",authRoute,getsidebarusers)
router.get("/:id",authRoute,getmessages)

router.post("/send/:id",authRoute,sendMessage)
export default router