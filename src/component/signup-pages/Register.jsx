import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { auth } from './firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState(''); // Added state for confirm password
    const [generalError, setGeneralError] = useState('');
    const navTo = useNavigate();

    const validateForm = () => {
        let isValid = true;

        // Reset general error
        setGeneralError('');

        // Check if any field is empty
        if (!name ||  !email || !password || !confirmpassword ) {
            setGeneralError('Please fill in all fields.');
            isValid = false;
        }

        // Validate email
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setGeneralError('Please enter a valid email address.');
            isValid = false;
        }

        // Validate password
        else if (!/^.{8,}$/.test(password)) {
            setGeneralError('Password should be at least 8 characters long.');
            isValid = false;
        } else if (!/\d/.test(password)) {
            setGeneralError('Password should contain at least one digit.');
            isValid = false;
        } else if (!/[a-zA-Z]/.test(password)) {
            setGeneralError('Password should contain at least one letter.');
            isValid = false;
        }
        else if (confirmpassword !== password) { // Check if passwords match
            setGeneralError('Passwords do not match.');
            isValid = false;
        }else{
            createUserWithEmailAndPassword(auth,email,password)
        }

       

        return isValid;
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (validateForm()) {
            // Submit form (you can add your submission logic here)
            console.log('Form submitted:', { name, email, password,confirmpassword });
            setEmail('');
            setName('');
            setPassword('');
            setConfirmPassword('');
            navTo('/home');
        }
    };

    return (
        <div className='2xl:container'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-screen gap-10 '>
                    <div className='hidden lg:block'><img src="https://ik.imagekit.io/tsplamal/tspl/6538623.jpg?updatedAt=1712132971154" alt="" /></div>
                    <div className='space-y-4 flex flex-col justify-center items-center'>
                        <div className='flex flex-col space-y-10 justify-center w-[80%] md:w-[60%]'>
                            <h1 className='text-xl lg:text-3xl text-blue-800 font-bold text-center'>Register</h1>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-b border-gray-300 focus:outline-none placeholder-gray-400  text-md lg:placeholder-gray-500 lg:text-xl " placeholder='Name' />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b border-gray-300 focus:outline-none  placeholder-gray-400  text-md lg:placeholder-gray-500 lg:text-xl" placeholder='Email' />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-b border-gray-300 focus:outline-none  placeholder-gray-400  text-md lg:placeholder-gray-500 lg:text-xl" placeholder='Password' />
                            <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border-b border-gray-300 focus:outline-none  placeholder-gray-400 text-md lg:placeholder-gray-500 lg:text-xl" placeholder=' Confirm Password' />
                            {generalError && <p className="text-red-500 mt-2 text-center md:text-base text-sm">{generalError}</p>}
                        </div>
                        <div className=' flex flex-col justify-center items-center  w-full py-6'>
                            <button type="submit" className='bg-blue-800 py-1 text-white font-bold w-[80%] md:w-[60%] rounded'>Submit</button>
                            <p className='text-base'>or</p>
                            <h2 className='md:text-base text-sm'>Are you Already an User <Link to={'/signin'}><span className='text-red-600 font-medium cursor-pointer'>Sign In</span></Link></h2>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    );
}

export default Register;