import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Nav'
import img from '../contact/img.png'
const Contact = () => {
  return (
    <div className=''>
    <Nav/>
    <div className='lg:pb-[120px] pb-[80px] pt-28'>
      <div className='grid grid-rows'>
        <div className=' mx-auto  my-10 flex flex-col space-y-2 md:w-[60%] w-[90%] text-white  shadow-2xl rounded-xl'>
        <div className='flex items-center'>
        <div className='w-[40%] h-full hidden lg:block rounded-xl'>
          <img src='https://img.freepik.com/free-photo/front-view-woman-working-desk-while-wearing-headset-looking-laptop_23-2148434727.jpg?t=st=1712819989~exp=1712823589~hmac=c65eb3d7298fd1d10f73a2a188596222b5436ff468ca5d6f0b615fade7f6d01d&w=740' className='w-full h-full object-cover rounded-xl  lg:rounded-r-none' alt="" />
        </div>

        <div className='bg-gradient-to-r from-blue-900 to-blue-600 w-full rounded-xl text-white lg:rounded-l-none'>

          <div className='lg:w-[80%] w-[100%] py-10 lg:py-14 mx-auto'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <label className='lg:text-5xl text-2xl font-bold'>Contact</label>
            <span className='lg:text-2xl text-sm font-semibold px-5 text-center'>Just Write as a Message!</span>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-[80%] lg:w-[100%] mt-5 gap-5'>
            <div className='flex flex-col'>
              <span className='text-md font-medium m-1 '>Name</span>
              <input type="text"  placeholder='Enter your Name' className='border rounded-xl p-3 focus:outline-none text-black' required />
            </div>
            <div className='flex flex-col'>
              <span className='text-md font-medium m-1'>Email</span>
              <input type="text"  placeholder='Enter a Email Address' className='border rounded-xl p-3 focus:outline-none text-black' required />
            </div>
          </div>
          <div  className='mx-auto lg:w-full w-[80%] text-black'><textarea rows="4" cols="50" className='focus:outline-none border lg:w-full rounded-xl p-3 mt-5 w-full ' placeholder='Messages'></textarea></div>
          <div className='mx-auto lg:w-full w-[80%]'><button className=' mx-auto border p-2 bg-white text-blue-800 rounded-xl font-bold mt-5 w-full transition-all duration-200 hover:bg-gray-200 tracking-wider'>Submit</button></div>
        </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Contact