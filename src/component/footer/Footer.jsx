import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";


const Footer = () => {
    const currentYear=new Date().getFullYear()
  return (
<div>
    <div className='bg-white pb-10'>
      
    <div className=' bg-gradient-to-r from-blue-900 to-blue-600 w-[90%] md:w-[85%] md:h-[200px] h-[710px]  mx-auto shadow-2xl rounded-xl'>
                <div className='relative w-[90%] md:w-[100%] mx-auto text-white '>
                  <div className='absolute -top-16 w-[100%]'>
                    <div className='flex justify-around w-full flex-col md:flex-row'>
                      <div className='flex flex-col space-y-6 m-5'>
                        <div className='flex justify-center'> < FaUsersLine  className=' shadow-xl shadow-blue-900 bg-white rounded-[50%] p-6 text-[100px] lg:text-[110px] text-blue-700' /></div>
                        <div className='flex flex-col items-center justify-center'>
                          <h1 className='lg:text-xl text-lg font-medium text-center'>About</h1>
                          <span className='text-center text-white opacity-75'>We Providing Man Power Support For Your Needs.</span>
                        </div>
                      </div>

                      <div className='flex flex-col space-y-6 m-5'>
                        <div className='flex justify-center'> < FaPhoneAlt className=' shadow-xl shadow-blue-900 bg-white rounded-[50%] p-6 text-[100px] lg:text-[110px] text-blue-700' /></div>
                        <div className='flex flex-col items-center justify-center'>
                          <h1 className='lg:text-xl text-lg font-medium text-center'>Contact Details</h1>
                          <span className='text-center text-white opacity-75'>+919788827888</span>
                          <span className='text-center  text-white opacity-75'>webtspl@gmail.com</span>
                        </div>
                      </div>

                      <div className='flex flex-col space-y-6 m-5'>
                        <div className='flex justify-center'> < MdLocationOn className=' shadow-xl shadow-blue-900 bg-white rounded-[50%] p-6 text-[100px] lg:text-[110px] text-blue-700' /></div>
                        <div className='flex flex-col items-center justify-center'>
                          <h1 className='lg:text-xl text-lg font-medium text-center'>Address Details</h1>
                          <span className='text-center  text-white opacity-75'>13 A Hms Colony, Main Road viratipattu ,Madurai,625016</span>
                        </div>
                      </div>

                      

                    </div>

                  </div>
                </div>

              </div>

    </div>

      <div className='bg-black text-white'>
         <p className='text-center text-xs font-semibold p-2 tracking-wider'>&copy; {currentYear} TSPL Web Technologies & IT. All rights reserved.</p>
      </div>

      </div>


  
  )
}

export default Footer
