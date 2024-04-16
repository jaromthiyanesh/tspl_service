import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ForgotPassword from './ForgotPassword';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [popup,setPopup]=useState(false)
  const nav=useNavigate()

  

  const validateForm = () => {
    let isValid = true;

    // Reset general error
    setGeneralError('');

    // Validate email
    if (!email) {
      setGeneralError('Please fill in all fields.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setGeneralError('Please enter a valid email address.');
      isValid = false;
    } else if (!password) {    // Validate password
      setGeneralError('Please fill the Password.');
      isValid = false;
    } else{
      signInWithEmailAndPassword(auth,email,password).then(()=>{
        // console.log("Login Successfull")
        nav('/home')
      }).catch(()=>{
        // console.log("Login Failed")
        setGeneralError("Invalid Email ID & Password")
        isValid=false
      })
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // Submit form (you can add your submission logic here)
      // console.log('Form submitted:', { email, password });
       setEmail('');
       setPassword('');
    }
  };

  return (
    <div className='2xl:container relative'>
      <div className='w-[90%] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 h-screen '>
          <div className='hidden lg:block'>
          <img src="https://ik.imagekit.io/tsplamal/tspl/6538623.jpg?updatedAt=1712132971154" alt="" />
          </div>
          <div className='space-y-4 flex flex-col justify-center items-center '>
            <div className='flex flex-col space-y-10 justify-center items-center w-full'>
              <h1 className='text-xl lg:text-3xl text-blue-800 font-bold'>Login</h1>

              <input
                type="text"
                className="border-b border-gray-300 focus:outline-none md:w-[60%] w-[80%] placeholder-gray-400 text-md lg:text-lg" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="border-b border-gray-300 focus:outline-none md:w-[60%] w-[80%] placeholder-gray-400 text-md lg:text-lg"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex justify-end md:w-[60%] w-[80%] '>
              <h3 className='text-blue-800 cursor-pointer text-sm md:text-base' onClick={e=>setPopup(!popup)}>Forgot password?</h3>
            </div>
            {generalError && <p className="text-red-500 text-sm md:text-base">{generalError}</p>}


            <div className='space-y-3 flex flex-col justify-center items-center w-full'>
              <button className='bg-blue-800 py-1 text-white font-medium md:w-[60%] w-[80%] rounded-sm' onClick={handleSubmit}>Submit</button>
              <p className='text-base'>or</p>
              <h2 className='md:text-base text-sm'>Are you New here <Link to={'/signup'}><span className='text-red-600 font-medium'>Register</span></Link></h2>
            </div>
            
          </div>
        </div>  
      </div>

    
    
    <ForgotPassword popup={popup} setPopup={setPopup}/>
  

    </div>
  );
}

export default SignIn;