import mongoose from "mongoose"

const URL="mongodb://127.0.0.1:27017/chat_app";

mongoose.connect(URL);
 export const db=mongoose.connection;
db.on("connected",()=>{
    console.log("Db connected");
})
db.on("disconnected",()=>{
    console.log("Disconnected");
})
db.on("error",(err)=>{
    console.log("Error connecting",err);
})



