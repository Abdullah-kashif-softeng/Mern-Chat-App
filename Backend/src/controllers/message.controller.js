import cloudinary from "../lib/cloudinary.js";
import Message from "../models/Message.model.js";
import User from "../models/User.model.js";


export const getsidebarusers=async(req,res)=>{
    try {
        const currentUser=req.user._id;
        const getusers=await User.find({_id:{$ne:currentUser}})

        res.status(200).json(getusers);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const getmessages= async(req,res)=>{
try {
    const {id}=req.params;
    const userid=req.user._id;

    const messgaes=await Message.find({
        $or:[
            {senderId:userid, receiverId:id},
            {senderId:id, receiverId:userid}
        ]
    })

    res.status(200).json(messgaes)
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
}

export const sendMessage=async(req,res)=>{
    try {
        const {text,image}=req.body;
        const {id}=req.params;
        const userid=req.user._id;

        let imagefile;

        if(image){
            const uploadimage=await cloudinary.uploader.upload(image);
            imagefile=uploadimage.secure_url;
        }

        const newmessage=await Message.create({
            senderId:userid,
            receiverId:id,
            text,
            image:imagefile
        })

        res.status(201).json(newmessage);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}