import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"


const LoginPage = () => {
  const [form,setform]=useState({
    email:"",
    password:""
  })
  const {login,isloggingin}=useAuthStore();
  return (
    <>
    <div>
      <form action="">
        <input type="email" name="email" placeholder="Email" onChange={(e)=>setform((prevData=>({...prevData,email:e.target.value})))}/>
        <input type="password" name="password" placeholder="Password" onChange={(e)=>setform((prevData=>({...prevData,password:e.target.value})))}/>
        <button type="button" onClick={()=>login(form)}>Login</button>
      </form>
    </div>
    </>
  )
}

export default LoginPage