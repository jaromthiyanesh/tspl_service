import React from 'react'
import { Link } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc";

const SideNav = ({isOpen,currentPath,Signout}) => {
    
    return (

        <div className={`absolute bg-white -bottom-6 w-full right-0 md:hidden transition-all duration-300 shadow-md p-2 ${isOpen?"":" -mr-[100%]"}`}>
            <div className='flex font-medium text-sm justify-around items-center'>
            <Link to={'/home'}><span>Home <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="home"?"":"hidden"}`}/></span></Link>
            <Link to={'/about'}><span>About Us <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="about"?"":"hidden"}`}/></span></Link>
            <Link to={'/contact'}><span>Contact <hr className={`border-blue-700 border w-[80%] mx-auto rounded-full ${currentPath==="contact"?"":"hidden"}`}/></span></Link>
            <button className={`bg-red-600 hover:bg-red-700 text-white text-xs md:text-base px-2 py-1 font-semibold md:font-medium md:text-white rounded transition-all duration-300 flex items-center`} onClick={Signout}>
                <span>Log Out</span> <span className='ml-1 text-lg'><VscSignOut /></span>
              </button>
            </div>
        </div>

    )
}

export default SideNav
