import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'


const App = () => {
  const {authUser,checkAuth}=useAuthStore()

  useEffect(()=>{
  checkAuth()
  },[checkAuth])

  console.log(authUser);
  return (
    <>
    <div>
    <Navbar/>

    <Routes>
  <Route path='/' element={authUser?<HomePage/>:<Navigate to="/login"/> }/>
  <Route path='/signup' element={<SignupPage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/settings' element={<SettingsPage/>}/>
  <Route path='/profile' element={<ProfilePage/>}/>
  
      </Routes>
      <span className="loading loading-spinner loading-lg"></span>
     
      </div>
    </>
  )
}

export default App