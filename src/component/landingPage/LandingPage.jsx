import React, { useEffect, useState } from 'react';
import engineerImg from '/src/assets/engineer.png';
import { IoCall } from "react-icons/io5";
import Nav from '../navbar/Nav';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const img1 = "https://ik.imagekit.io/tsplamal/tspl/electrician-construction-worker-overalls-with-drill-installation-sockets-home-renovation-concept%20(1).jpg?updatedAt=1712129529407";
  const img2 = "https://ik.imagekit.io/tsplamal/tspl/plumber-repair-experienced-attentive-middleaged-man-examining-bottom-kitchen-sink.jpg?updatedAt=1712129534347";
  const img3 = "https://ik.imagekit.io/tsplamal/tspl/medium-shot-woman-cleaning-home.jpg?updatedAt=1712129533166";

  const [img, setImg] = useState(img1);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(prevImg => {
        if (prevImg === img1) {
          return img2;
        } else if (prevImg === img2) {
          return img3;
        } else {
          return img1;
        }
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [img1, img2, img3]);

  return (
    <div className='w-screen h-screen overflow-hidden'>
      
      <div className='w-full h-full relative overflow-hidden'>
        <Nav />
        <div className='w-full h-full relative'>
          <img src={img} alt="BG IMG" className='w-full h-full object-cover' />
          <div className='absolute top-0 bg-black opacity-35 h-screen w-screen'></div>
        </div>

        <div className='absolute w-full text-center  top-[35%] lg:top-[40%]'>
        
          <div className='w-[90%] mx-auto'>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-white font-semibold text-3xl lg:text-5xl [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] '>Hire a Handyman for your work</h1>
              <p className='text-blue-900 md:text-xl text-base font-medium'>Click to Start hire the suitable worker</p>


              <div className='flex justify-center md:space-x-10'>
                <Link to={'/home'}><div className='flex cursor-pointer'>
                  <span className='bg-blue-700 font-medium text-lg rounded-l text-white md:w-16 w-12 md:h-12 h-10 flex justify-center items-center'><img src={engineerImg} alt="Icon" className='md:w-10 w-8' /></span><span className='bg-white font-bold text-lg md:w-40 w-32 md:h-12 h-10 flex justify-center items-center rounded-r  text-blue-900'><span>Handyman</span></span>
                </div></Link>
                <Link to={'/contact'}><div className='md:flex cursor-pointer hidden'>
                  <span className='bg-blue-700 font-medium text-lg text-white w-16 h-12 flex justify-center items-center rounded-l'><IoCall className='w-10 text-3xl' /></span><span className='flex justify-center items-center text-blue-900'><span className='bg-white font-bold text-lg w-40 h-12 flex justify-center items-center rounded-r'><span>Contact </span></span></span>
                </div></Link>
              </div>

            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default LandingPage;
