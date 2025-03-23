
import {create} from "zustand"
import { axiosinstance } from "../lib/axios"
import toast from "react-hot-toast";
export const useAuthStore=create((set)=>({
    authUser:null,
    isSigningUP:false,

    ischeckingAuth:true,

    checkAuth:async()=>{
        try {
            const res=await axiosinstance.get("/auth/check");
            set({authUser:res.data})
        } catch (error) {
            set({authUser:null})
            console.log(error)
        }finally{
            set({ischeckingAuth:false})
        }
    }
,
    signUp:async(data)=>{
   set({isSigningUP:true})
   try {
    const res = await axiosinstance.post("/auth/signup", data, {
        headers: {
          "Content-Type": "application/json", // ✅ Ensure JSON format
        },
      });
    set({authUser:res.data})
    toast.success("Account created successfully");
   } catch (error) {
    console.log(error);
  } finally {
    set({ isSigningUp: false });
  }
    }
}))