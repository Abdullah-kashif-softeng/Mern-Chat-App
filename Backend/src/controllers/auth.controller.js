import User from "../models/User.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cook from "cookie-parser"
export const signup=async(req,res)=>{
    try{
 const {name,email,password}=req.body;
 if(password.length<9){
    res.status(400).json({message:"Password must be atleast 9 characters"});
 }
 const user=await User.findOne({email});
 if(user){
    res.status(400).json({msg:"User already exists"});
 }
 const hashedpassword=await bcrypt.hash(password,10);
 const data=await User.create({name,email,password:hashedpassword});
 res.status(201).json({data:"User created",data});

    }catch(err){
 console.log(err);
 res.status(500).json(err);
    }
}

export const login=async(req,res)=>{
try {
    const {email,password}=req.body;
    if(!email||!password){
       return res.status(400).json({msg:"Email or password missing"})
    }
    const data=await User.findOne({email:email});
    if(!data){
        return res.status(400).json({msg:"User not found"})
    }
    const hashedpass=await bcrypt.compare(password,data.password);
    if(!hashedpass){
        return res.status(404).json({msg:"Wrong credentials"});
    }
    const payload={
        email:data.email,
        userid:data._id
    }
    const token=jwt.sign(payload,"Hi$$$");
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"strict"
    })
    res.status(200).json({msg:"User logged in successfull"});
} catch (error) {
    console.log(err);
    res.status(500).json(err);
    
}
}