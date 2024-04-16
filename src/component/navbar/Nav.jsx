import React, { useEffect, useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../signup-pages/firebase.config';
import { VscSignOut } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import SideNav from './SideNav';
import logo from '../navbar/logo.jpg'





const Nav = () => {
  const nav = useNavigate()
  const location=useLocation()
  const [navlogin, setNavLogin] = useState(false)
  const [currentPath,setCurrentPath]=useState("")
  const [isOpen, setOpen] = useState(false)

  useEffect(()=>{
    auth.onAuthStateChanged(function (user){
      if(user && user.providerData[0].providerId === "password"){
        setNavLogin(true);
        if(location.pathname==="/home"){
          setCurrentPath("home")
        }else if(location.pathname==="/about"){
          setCurrentPath("about")
        }else if(location.pathname==="/contact"){
          setCurrentPath("contact")
        }
       
      }else{
        setNavLogin(false);
      }
    })
  },[location.pathname])

  const Signout = () => {
    auth.signOut()
    nav('/')
  }


  return (
    <div className='fixed top-0 w-screen z-10 bg-white shadow-md'>
      <div className='w-full relative'>
      <div className='bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center text-xs md:text-sm tracking-widest font-semibold'> <marquee direction="left" scrollamount="10" className="md:w-[40%] w-[90%]">Welcome to Our Trip Sweet Solution | Cashback Upto 20% - for UPI Payments Only</marquee></div>
      <div className='w-[90%] flex justify-between py-4 mx-auto text-blue-800'>
        <div><img src={logo} width={"70px"} alt="LOGO" /></div>
        <div className='flex space-x-16 items-center'>
          {!navlogin && (
            <Link to='/signup'>
              <button className={`border-2 border-blue-700 hover:border-blue-800 hover:text-blue-800 px-6 py-1 font-medium hidden md:block rounded transition-all duration-300`}>
                Signup
              </button>
            </Link>
          )}
          {!navlogin && (
            <Link to='/signin'>
              <button className={`md:bg-blue-700 md:hover:bg-blue-800 border-2 hover:border-blue-800 border-blue-700 text-sm md:text-base px-6 py-1 font-semibold md:font-medium md:text-white md:block rounded transition-all duration-300`}>
                Login
              </button>
            </Link>
          )}
          {navlogin && (
            <div>
            <div className='hidden md:flex items-center space-x-20 font-semibold'>
              <Link to={"/home"}><span className='cursor-pointer hover:text-blue-800'>Home <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="home"?"":"hidden"}`}/></span></Link>
              <Link to={"/about"}><span className='cursor-pointer hover:text-blue-800'>About Us <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="about"?"":"hidden"}`}/></span></Link>
              <Link to={"/contact"}><span className='cursor-pointer hover:text-blue-800'>Contact <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="contact"?"":"hidden"}`}/></span></Link>
              <button className={`bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-4 py-2 font-semibold md:font-medium md:text-white rounded transition-all duration-300 flex items-center`} onClick={Signout}>
                <span>Log Out</span> <span className='ml-1 text-lg'><VscSignOut /></span>
              </button>
            </div>

            <div className='md:hidden'>
            <RiMenu2Line className={`text-xl ${isOpen?"hidden":"block"}`} onClick={e=>setOpen(!isOpen)}/>
            <CgClose className={`text-xl ${isOpen?"block":"hidden"}`} onClick={e=>setOpen(!isOpen)}/>
            </div>
        
            </div>
          )}
        </div>

      <SideNav isOpen={isOpen} currentPath={currentPath} Signout={Signout}/>
      </div>
      </div>
    </div>
  )
}

export default Nav
