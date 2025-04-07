import { useAuthStore } from "../store/useAuthStore.js"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [showPassword,setShowPassword]=useState(false);
  const [fformData,setFormData]=useState({
    name:"",
    password:"",
    email:""
  })
  const navigate = useNavigate();
const {signUp, isSigningUP}=useAuthStore();
  const handleSubmit=async()=>{
 await signUp(fformData);
 navigate("/login");
  }
  function handlepass(){
    setShowPassword(prev=>!prev)
  }
 
  return (
  <>
  <div className="flex justify-center items-center h-screen">
  <form className="flex flex-col w-[480px]" action={handleSubmit}>
  <input type="email" className="bg-white text-black mb-4" name="email" placeholder="Email" onChange={(e)=>setFormData((prevData=>({
    ...prevData,
    email:e.target.value
  })))}/>
  <input type={showPassword?"text":"password"} className="bg-white text-black mb-4" name="password" placeholder="password" onChange={(e)=>setFormData((prevData=>({
    ...prevData,
    password:e.target.value
  })))}/>
  <button type="button" onClick={handlepass}>{showPassword==true?"Hidepasswords":"Showpassword"}</button>
  <input type="text" className="bg-white text-black mb-4" name="name" placeholder="name" onChange={(e)=>setFormData((prevData=>({
    ...prevData,
    name:e.target.value
  })))}/>
  <button className="rounded-4xl border-green-600 border-4 bg-black" type="submit">Done</button>
  </form>
  </div>
  </>
  )
}

export default SignupPage