import jwt from "jsonwebtoken"

export const authRoute=(req,res,next)=>{
try {
    const token=req.cookies.token;

    if(!token){
       return res.status(400).json({msg:"Token not found"})

    }

    const decoded=jwt.verify(token,"Hi$$$");
    req.user=decoded

    next();
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
}