import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function JobPortal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Change this value to adjust the speed of automatic sliding (in milliseconds)
    };

    return (
        <div className='w-[85%] md:w-[90%] mx-auto py-4 mt-28   '>
            <Slider {...settings}>
                <div class='w-full lg:h-80 h-40 relative'>
                    <img src="https://ik.imagekit.io/7ymcb1ihc/career%20solutions/jobportal%20img/wepik-export-20240306080548eK3u.jpeg?updatedAt=1709712825639" class='w-full h-full object-cover rounded-xl' alt="img" />
                    <div class='absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-40 p-10 rounded-xl  flex flex-col justify-end  items-start'>
                        <h1 class="lg:text-2xl text-xl font-bold text-center">Your Service Expert in Madurai</h1>
                        <p class="text-xl hidden lg:block text-center">Get Instant Access to Reliable and Affordable Services</p>
                    </div>
                </div>
                <div class='w-full h-40 lg:h-80  relative'>
                <img src="https://ik.imagekit.io/7ymcb1ihc/career%20solutions/jobportal%20img/wepik-export-20240306080426j9mS.jpeg?updatedAt=1709712825597" className='w-full h-full rounded-xl object-cover' alt="img" />
                    <div class='absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-40 p-10 rounded-xl  flex flex-col justify-end  items-start'>
                        <h1 class="lg:text-2xl text-xl font-bold text-center">Your Service Expert in Madurai</h1>
                        <p class="text-xl hidden lg:block text-center">Get Instant Access to Reliable and Affordable Services</p>
                    </div>
                </div>
                <div class='lg:w-full lg:h-80  h-40 relative'>
                <img src="https://ik.imagekit.io/7ymcb1ihc/career%20solutions/jobportal%20img/wepik-export-20240306075056XhLS.jpeg?updatedAt=1709712825330" className='w-full h-full rounded-xl object-cover' alt="img" />
                    <div class='absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-40 p-10 rounded-xl  flex flex-col justify-end  items-start'>
                        <h1 class="lg:text-2xl text-xl  font-bold text-center">Your Service Expert in Madurai</h1>
                        <p class="text-xl hidden lg:block text-center">Get Instant Access to Reliable and Affordable Services</p>
                    </div>
                </div>
                <div class='lg:w-full lg:h-80  h-40 relative'>
                <img src="https://ik.imagekit.io/7ymcb1ihc/career%20solutions/jobportal%20img/wepik-export-20240306080745r1hQ.jpeg?updatedAt=1709712825688" className='w-full h-full rounded-xl object-cover' alt="img" />
                    <div class='absolute top-0 left-0 w-full h-full text-white bg-blue-950 bg-opacity-40 p-10 rounded-xl  flex flex-col justify-end  items-start'>
                        <h1 class="lg:text-2xl text-xl  font-bold text-center">Your Service Expert in Madurai</h1>
                        <p class="text-xl hidden lg:block text-center">Get Instant Access to Reliable and Affordable Services</p>
                    </div>
                </div>
               
            </Slider>
        </div>
    );
}

export default JobPortal;