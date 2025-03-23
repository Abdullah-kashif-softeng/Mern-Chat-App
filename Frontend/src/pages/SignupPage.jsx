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
  <h1>Hello now</h1>
  <form action={handleSubmit}>
  <input type="email" className="bg-amber-500 text-black" name="email"/>
  <input type="password" className="bg-amber-500 text-black" name="password" placeholder="password"/>
  <input type="text" className="bg-amber-500 text-black" name="name"/>
  <button type="submit">Done</button>
  </form>

  </>
  )
}

export default SignupPage