import React, { useState } from 'react';
import { FaExclamation } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import {auth} from './firebase.config'
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = ({popup,setPopup}) => {
    const [resetMail, setResetMail] = useState('');
    const [generalMessage, setGeneralMessage] = useState('');

    const validateError = () => {
        if (!/\S+@\S+\.\S+/.test(resetMail)) {
            setGeneralMessage('Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateError()) {
            // Handle form submission
            // For now, let's just set the success message
            sendPasswordResetEmail(auth,resetMail).then(e=>{
                setGeneralMessage('Submitted successfully! Check Your Mail');
                setTimeout(() => {
                    setPopup(!popup)
                }, 2000);
            }).catch(e=>{
                setGeneralMessage("submission Failed")
                // console.log(e.code)
            })
            
            // Clear the resetMail state
            setResetMail('');
        }
    };

    return (
        <div className={`absolute top-0 w-screen h-screen z-10 bg-black bg-opacity-40 ${popup?"":"hidden"}`}>
            <div className='flex flex-col items-center justify-center p-5 gap-3 w-[80%] md:w-[40%] mx-auto rounded-md mt-10 shadow-gray-700 shadow-md bg-white'>
                <span><FaExclamation className='text-blue-500 text-2xl' /></span>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h1 className='md:text-xl text-lg font-bold text-center'>Forgot Password</h1>
                    <h1 className='md:text-md text-xs text-center'>We'll Sent Link To Your Email For The Reset Password</h1>
                    <div className='flex flex-col items-center gap-4 justify-center'>
                        <input
                            type="text"
                            placeholder='✉️ Enter Your Registered email'
                            className='focus:outline-none border text-xs md:text-base border-gray-300 rounded w-full py-2 px-1'
                            value={resetMail}
                            onChange={(e) => setResetMail(e.target.value)}
                        />
                        {generalMessage && <p className={generalMessage === 'Submitted successfully! Check Your Mail' ? "text-green-500" : "text-red-500"}>{generalMessage}</p>}
                        <button
                            className='focus:outline-none bg-blue-700 text-white md:text-base text-sm px-4 py-2 rounded-md font-semibold'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <span><VscSignOut /></span>
                            <label htmlFor="" className='cursor-pointer text-sm md:text-base' onClick={e=>setPopup(!popup)}>Back to login</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;