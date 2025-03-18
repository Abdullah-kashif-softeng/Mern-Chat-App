
import {create} from "zustand"
import { axiosinstance } from "../lib/axios"

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
}))