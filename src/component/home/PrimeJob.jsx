import React from 'react';
import JobPortal from './Jobportal';
import Nav from '../navbar/Nav';
import { useNavigate } from 'react-router-dom';


const PrimeJob = ({ data, onView, login }) => {
    const nav = useNavigate();

    function handlePress(job) {
        
      
            if (login) {
                // If the user is authenticated with email and password, call onView to view the job
                onView(job);
            } else{
                nav('/signin')
            }
           
 
    }

    return (
        <div className='mt-32'>
            <Nav/>
            <JobPortal/>
            <div className='2xl:container'>
                <h1 className='text-center font-bold text-blue-800 text-2xl py-10 '>Madurai Service Expert</h1>
                <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {data.map(job => (
                        <div key={job.id} className="relative cursor-pointer lg:h-[300px] m-3  h-full">
                            <img src={job.img} className="object-cover w-full h-full  rounded-2xl" alt={job.title} />
                            <div className="absolute top-0 right-0  w-full h-full flex flex-col justify-center items-center  font-semibold rounded-2xl bg-black bg-opacity-40 text-white ">
                                <h1 className='lg:text-2xl text-xl'>{job.title}</h1>
                            </div>
                            <div className="absolute top-0 right-0  w-full h-full flex flex-col justify-center items-center   rounded-2xl bg-gradient-to-t from-blue-950 to-blue-400  bg-opacity-40 text-white opacity-0 hover:bg-opacity-100 hover:opacity-100 transition-opacity duration-300">
                                <h1 className='lg:text-2xl text-xl font-semibold'>{job.title}</h1> <hr className='w-[75%] border rounded-full mt-1' />
                                <p className='text-base py-3 text-center w-[90%]'>Unlock Exclusive Access and Reserve Today. Don't Miss Out on This Opportunity.</p>
                                <button className='px-8 py-[6px] md:px-12 md:py-2 border-2 border-white text-lg bg-white md:bg-transparent text-blue-800 md:text-white md:hover:bg-white md:hover:text-blue-800 font-medium transition-all duration-300 mt-2 rounded' onClick={()=>handlePress(job)} >Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default PrimeJob;
