import React, { useEffect, useState } from 'react'
import Signup from './component/signup-pages/Signup'
import SignIn from './component/signup-pages/SignIn'
import Register from './component/signup-pages/Register'
import {Routes,Route} from 'react-router-dom'
// import Nav from './component/navbar/Nav'
// import Footer from './component/footer/Footer'
import Contact from './component/contact/Contact'
import LandingPage from './component/landingPage/LandingPage'
import Home from './component/home/Home'
import AboutUs from './component/about/AboutUs'
import { auth } from './component/signup-pages/firebase.config';

const App = () => {

  const [login,setLogin]=useState(false)
  useEffect(()=>{
    auth.onAuthStateChanged(function (user){
      if(user && user.providerData[0].providerId === "password"){
        setLogin(true)
      }else{
        setLogin(false)
      }
    })
  },[location.pathname])
  
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/home' element={<Home login={login} />}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<AboutUs/>} />
     </Routes>
    </div>
  )
}

export default App
