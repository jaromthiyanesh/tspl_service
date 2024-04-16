import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for react-phone-input-2
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'react-otp-input';
import { CgSpinner } from 'react-icons/cg';
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [phone, setPhone] = useState('');
    const [phnErrMsg,setPhnErrMsg]=useState("")
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpState,setOtpState]=useState("")
    const [user, setUser] = useState(null);
    const [timing, setTiming] = useState(59);
    const navTo=useNavigate()

    const PhoneInputValue=(value)=>{
        setPhone(value)
        setPhnErrMsg("")
    }
   



    const onSignup = async () => {

        if(phone !==""){
            
        try {
            setPhnErrMsg("")
            // Initialize reCAPTCHA verifier with the reCAPTCHA container element
            const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});

            // Sign in with phone number
            const phoneFormat = '+' + phone
            const confirmation = await signInWithPhoneNumber(auth, phoneFormat, recaptcha);
            // console.log(confirmation);
            setUser(confirmation)
            setOpen(!open)
            setPhone('')

            const intervalId = setInterval(() => {
                setTiming(prevTiming => {
                    const newTiming = prevTiming > 0 ? prevTiming - 1 : 0;
                    return newTiming < 10 ? '0' + newTiming : newTiming;
                });
            }, 1000);
        } catch (err) {
            // console.log(err);
            setPhone('');
            setPhnErrMsg("Invalid Phone Number Please Try Again")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
        }else{
            setPhnErrMsg("Please Enter Your Phone Number")
        }

    };

    const handleVerify = async () => {
        // Perform OTP verification logic here
        setLoading(true)

        try {
            await user.confirm(otp)
            // console.log("Verified Your OTP" + otp)
            setLoading(false)
            setOtpState("")
            navTo('/register')
            
            // auth.onAuthStateChanged(function(user){
            //     if(user){
                   
            //     }else{
            //         navTo('/register')
            //     }
            // })
        
           

        } catch (err) {
            setLoading(false)
            setOtpState("OTP Did Not Match")
            
            throw Error("OTP Did Not Match")
        }

    };

    return (
        <div className='2xl:container'>
            <div className='w-[90%] mx-auto'>
                <div className='signup-container grid lg:grid-cols-2 grid-cols-1 justify-around items-center w-full h-screen'>

                    <div className='signup-form hidden lg:block'>
                        <img src="https://ik.imagekit.io/tsplamal/tspl/6538623.jpg?updatedAt=1712132971154" alt="" />
                    </div>



                    <div className={`login-section flex  flex-col gap-10 justify-center items-center ${open ? 'flex' : 'hidden'}`}>

                        <div>
                            <h1 className='font-bold text-xl text-blue-800 lg:text-3xl'>Sign Up</h1>
                        </div>


                        <div className='space-y-4 flex flex-col justify-center items-center w-[80%] md:w-[60%]'>
                            <div className='w-full'>
                                <label htmlFor="phone">Mobile Number</label>
                                <PhoneInput
                                    className='my-3 text-center'
                                    country={'gb'} // Default country
                                    value={phone}
                                    onChange={PhoneInputValue} // Update state with the new value
                                    inputProps={{
                                        style: { width: '100%' },
                                        name: 'phone',
                                        id: 'phone',
                                        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
                                        required: true
                                    }}
                                />
                            <p className='text-center text-red-500 font-medium'>{phnErrMsg}</p>
                            </div>
                            <button className='text-white font-medium bg-blue-800 py-1 w-full rounded' onClick={onSignup}>Next</button>

                            <p className='text-md lg:text-lg'>or</p>
                            <p className='text-md lg:text-lg'>Already Have a Account <Link to={'/signin'}><span className='text-blue-800 cursor-pointer text-md lg:text-lg font-medium'>Login</span></Link></p>
                            <div id='recaptcha'></div>
                        </div>
                    </div>


                    <div className={` flex-col items-center justify-center ${open ? 'hidden' : 'flex'}`}>
                        <div className='flex flex-col gap-6 w-full items-center'>
                            <h1 className='text-center font-bold text-xl lg:text-3xl text-blue-800'>OTP Verification</h1>
                            <div className='flex flex-col w-[100%] md:w-[80%]'>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    separator={<span>-</span>}
                                    className="mt-3 border-b border-gray-300 rounded-md px-3 py-2 focus:outline-none flex justify-start lg:justify-between"
                                    renderInput={(inputProps, index) => (
                                        <input
                                            {...inputProps}
                                            autoFocus={index === 0} // Autofocus on the first input
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                outline: '1px  solid black',
                                                textAlign: 'center', // Align text to the center
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                            }} // Adjust input style
                                        />

                                    )}
                                />
                                <div className='flex justify-between w-full mt-2'>
                                <div className={`text-red-600 font-medium`}>{otpState}</div>
                                <div className=' text-blue-800 font-medium'>00:{timing}</div>
                                </div>
                            </div>

                            <div className='md:w-[60%] w-[100%]'>
                                <button className='text-white font-medium bg-blue-800 py-1 w-full flex justify-center items-center rounded' onClick={handleVerify}>
                                    {loading && <CgSpinner size={20} className='mr-2 animate-spin' />}
                                    <span className='text-md lg:text-lg'>Submit</span>
                                </button>
                                <div className='flex text-blue-800 justify-between font-medium'>
                                    <p className='cursor-pointer hover:text-blue-900 text-sm lg:text-lg ' onClick={() => window.location.reload()}>Resend OTP</p>
                                    <p className='cursor-pointer hover:text-blue-900 text-sm lg:text-lg' onClick={() => window.location.reload()}>Back</p>
                                </div>
                            </div>
                            <div>
                            < p className='text-sm lg:text-lg text-center mb-2' >or</p>
                            <p className='text-sm lg:text-lg text-center' >Already Have a Account <Link to={'/signin'}><span className='text-blue-800 cursor-pointer text-md lg:text-lg font-medium'>Login</span></Link></p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Signup;
