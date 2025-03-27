import { useAuthStore } from "../store/useAuthStore.js"
import { useState } from "react"
const SignupPage = () => {
  const [showPassword,setShowPassword]=useState(false);
  const [fformData,setFormData]=useState({
    name:"",
    password:"",
    email:""
  })
const {signUp, isSigningUP}=useAuthStore();
  const handleSubmit=async(formData)=>{
  const email=formData.get("email")
  const password=formData.get("password")
  const fullname=formData.get("name")
  setFormData(prevData=>(
    {
      ...prevData,
      email:email,
      password:password,
      name:fullname
    }
  ))
 await signUp(fformData)
 console.log(email);
  }
  return (
  <>
  <div className="flex justify-center items-center h-screen">
  <form className="flex flex-col w-[480px]" action={handleSubmit}>
  <input type="email" className="bg-white text-black mb-4" name="email" placeholder="Email"/>
  <input type="password" className="bg-white text-black mb-4" name="password" placeholder="password"/>
  <input type="text" className="bg-white text-black mb-4" name="name" placeholder="name"/>
  <button className="rounded-4xl border-green-600 border-4 bg-black" type="submit">Done</button>
  </form>
  </div>
  </>
  )
}

export default SignupPage