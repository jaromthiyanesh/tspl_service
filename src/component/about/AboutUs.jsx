import React, { useEffect, useState } from 'react'
import Nav from '../navbar/Nav'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import img from "../about/google.png"
import { ReviewData } from './Data';
import Footer from '../footer/Footer';

const AboutUs = () => {

    const [width, setWidth] = useState(1)
    useEffect(() => {
        if (window.innerWidth > 1024) {
            setWidth(3);
        } else {
            setWidth(1);
        }
    }, [window.innerWidth]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: width,
        autoplay: true,
        autoplaySpeed: 3000, // Change autoplay speed as needed
    }

    return (
        <div>
            <Nav />

            <div className='mb-32 overflow-x-hidden'>

                <div className='bg-gradient-to-r from-blue-900 to-blue-600 text-white h-60 md:pt-32 pt-32 flex flex-col justify-center items-center text-center shadow-2xl '>
                    <h1 className='md:text-3xl text-2xl font-semibold my-2 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>About Us</h1>
                    <p className='w-[80%] text-sm lg:text-base opacity-75'>Tripsweet Service Provider - Your Solution for Home Improvements</p>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 w-[90%] mx-auto space-y-8 lg:space-y-0 lg:gap-12'>

                    <div className='bg-gray-200 w-[100%] mx-auto shadow-2xl rounded-xl p-10 col-span-2'>
                        {/* <h1 className='font-medium text-xl mb-2'>Why Choose Us</h1> */}
                        <h2 className='font-medium text-lg lg:text-xl mb-2'>Welcome to Tripsweet Service Provider - Your Premier Choice for Home Improvement Solutions!</h2>
                        <p className='opacity-75 text-sm md:text-base' >
                            At Tripsweet Service Provider, we believe in partnering with skilled craftsmen across various specialties to provide you with peace of mind when it comes to tackling all your home improvement needs. Similar to Handyman Connection, we take pride in our network of professionals who are dedicated to delivering quality workmanship and exceptional service, ensuring your satisfaction with every project.
                        </p>
                        
                        <h2 className='font-medium text-lg lg:text-xl my-2'>Why Choose Us?</h2>
                        <p className='opacity-75 text-sm md:text-base'>Choose us for cost-effective yet superior service, making home improvement both affordable and exceptional. With a focus on quality craftsmanship, transparent pricing, and personalized service, we aim to exceed your expectations with every project. Experience the difference with Tripsweet Service Provider and discover why we're your go-to choice for all your home improvement needs.</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6 gap-3 col-span-1'>

                        <div className='bg-gray-200 shadow-xl rounded-xl grid-cols-1'>

                            <div className='py-4 lg:p-2 lg:flex flex-col lg:flex-row items-center w-[90%] mx-auto justify-center h-full'>
                                <div className='flex lg:flex-none justify-center'><div className='md:p-8 p-5 rounded-full w-fit shadow-[inset_0_4px_8px] shadow-gray-400 lg:mr-3'><MdAccessTimeFilled className='md:text-5xl text-3xl' /></div></div>

                                <div className='lg:w-[70%] w-[100%] lg:text-left text-center mt-2 lg:mt-0'>
                                    <h1 className='my-1 text-base md:text-lg font-medium'>Time Saver</h1>
                                    <p className='opacity-75 text-sm md:text-base'>Say goodbye to wasted time on home repairs. Our Service Provide quality home improvements. Save time, stress and reclaim your day!</p>
                                </div>

                            </div>
                        </div>



                        <div className='bg-gray-200 shadow-xl rounded-xl'>

                            <div className='py-4 lg:p-0 lg:flex flex-col lg:flex-row items-center w-[90%] mx-auto justify-center h-full'>
                                <div className='flex lg:flex-none justify-center'><div className='md:p-8 p-5 rounded-full w-fit shadow-[inset_0_4px_8px] shadow-gray-400 lg:mr-3'><FaShippingFast className='md:text-5xl text-3xl' /></div></div>

                                <div className='lg:w-[70%] lg:text-left text-center mt-2 lg:mt-0'>
                                    <h1 className='my-1 text-base md:text-lg font-medium'>Fast service</h1>
                                    <p className='opacity-75 text-sm md:text-base'>We're all about speed without sacrificing quality, transparent pricing and top-notch service, your home is in good hands.</p>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>




                <div className="slider-container w-[90%] mx-auto my-10">

                    <Slider {...settings}>
                        {ReviewData.map((item) => (
                            <div key={item.id}>
                                <div className=' p-5 rounded-xl m-2 shadow-md  bg-gray-200 h-72'>

                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <span className='text-blue-800 lg:text-base text-sm font-semibold mt-2 flex items-center'><img src={item.profile} className='w-10 rounded-full mr-1' />
                                                <div>
                                                    <span>{item.name}</span>
                                                    <div className='flex text-yellow-500 text-sm lg:text-base'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
                                                </div>
                                            </span>
                                        </div>

                                        <div className='w-16 lg:w-20'><img src={img} alt="" className='w-full' /></div>

                                    </div>

                                    <p className='opacity-75 mt-3 text-sm md:text-base h-48 overflow-y-scroll ' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>{item.msg}</p>
                                    <div className='flex'>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>




            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
