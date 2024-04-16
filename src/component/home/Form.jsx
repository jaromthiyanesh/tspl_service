import React, { useRef, useState } from 'react';

import { IoMdArrowRoundBack } from "react-icons/io";


import { v4 } from 'uuid';
import { db } from '../signup-pages/firebase.config'; // Assuming you have the Firebase configuration exported from this file
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function Form({ selected, onBack }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showMaxLimitMessage, setShowMaxLimitMessage] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [otherOptionInput, setOtherOptionInput] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formError, setFormError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [submitButtonText, setSubmitButtonText] = useState('Submit');
  const fileInputRef = useRef(null)


  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleOptionChange(e) {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);

    if (selectedOption === "Others") {
      setOtherOptionInput(''); r
    }
  }

  function handlePhoneChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleTermsChange(e) {
    setTermsAgreed(e.target.checked);
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (selectedImages.length + files.length > 3) {
      setShowMaxLimitMessage(true);
      return;
    }
    setSelectedImages([...selectedImages, ...files]);
    setShowMaxLimitMessage(false);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const handleReset = () => {
    setSelectedImages([]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectedOption('');
    setOtherOptionInput('');
    setTermsAgreed(false);
    setFormError('');
    setShowMaxLimitMessage(false);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phoneNumber || !address || !selectedOption || !termsAgreed) {
      setFormError('Please fill out all fields.');
      return;
    }
    try {
      setSubmitButtonText('Submitting...');
      const uploadPromises = selectedImages.map(image => {
        const imgDataRef = ref(db, `Imgs/${v4()}`);
        return uploadBytes(imgDataRef, image);
      });
      const snapshots = await Promise.all(uploadPromises);
      const imgUrls = await Promise.all(snapshots.map(snapshot => getDownloadURL(snapshot.ref)));

      processForm(imgUrls);
      console.log("Images uploaded and form submitted.");
    } catch (error) {
      console.error("Error:", error.message);
      setSubmitButtonText("Submit");
    }
  };

  const processForm = async (imgUrls) => {
    try {
      const firestore = getFirestore(); // Ensure db is correctly initialized
      const valRef = collection(firestore, "textdata"); // Use firestore instead of db
      const selectedOptionValue = selectedOption === 'Others' ? otherOptionInput : selectedOption;
      await addDoc(valRef, {
        fullname: `${firstName} ${lastName}`,
        email: email,
        phone: phoneNumber,
        selectedOption: selectedOptionValue,
        address: address,
        imgUrls: imgUrls
      });
      clearForm();
      console.log("Form submitted successfully.");
    } catch (error) {
      console.error("Error adding document:", error.message);
      throw new Error('Error submitting form. Please try again.');
    }
  };



  const clearForm = () => {
    try {
      setTimeout(() => {
        setSubmitButtonText('Submitted ✔️');
        handleReset();
        setTimeout(() => {
          setSubmitButtonText('Submit');
        }, 1000);
      }, 1000);
    } catch (error) {
      console.error("Error clearing form:", error.message);
    }
  };

  return (
    <div className='2xl:container py-2'>
      <div className=' w-[90%] mx-auto flex justify-between items-center m-2'>
        <div onClick={onBack} className='flex justify-center items-center border-black lg:border-2 text-xl rounded-lg gap-1 cursor-pointer pl-3 pr-4 py-2'>
          <span className='mt-1 lg:text-base text-2xl'><IoMdArrowRoundBack/></span>
          <button className='font-semibold text-base hidden lg:block '> Back</button>
        </div>
        <h1 className='text-center text-xl lg:text-2xl font-bold underline'>Registration Info</h1>
        <div></div>
      </div>

      <div className='w-[90%] mx-auto grid grid-cols-4'>
        <div className='col-span-1 h-[600px] hidden lg:block py-6'>
          <div className="relative">
            <img src={selected.img} className="object-cover rounded-md h-[670px]" alt={selected.img} />
            <div className="absolute rounded-md bg-black bg-opacity-40 inset-0 flex justify-center items-center">
              <div>
                <h1 className="p-2 text-2xl font-semibold text-white text-center">{selected.title}</h1>
                <p className='px-2 text-md font-medium text-center text-white'>Great choice! Access exclusive deals and offers by registering now!</p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-3 col-span-4 h-[100%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='pt-12 lg:pl-10 p-2'>
              <div className='flex flex-col justify-center items-start space-y-4'>
                <label className='font-semibold text-lg'>First Name<span className='text-red-600'>*</span></label>
                <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder='Enter the First Name' className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md ${focusedField === 'firstName' ? 'border-green-500' : (formError && !firstName.trim() ? 'border-red-500' : 'border-gray-500')}`} onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField(null)} />

                <label className='font-semibold text-lg'>Last Name<span className='text-red-600'>*</span></label>
                <input type="text" value={lastName} onChange={handleLastNameChange} placeholder='Enter the Last Name' className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md ${focusedField === 'lastName' ? 'border-green-500' : (formError && !lastName.trim() ? 'border-red-500' : 'border-gray-500')}`} onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField(null)} />

                <label className='font-semibold text-lg'>Email<span className='text-red-600'>*</span></label>
                <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter the Email Address' className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md ${focusedField === 'email' ? 'border-green-500' : (formError && !email.trim() ? 'border-red-500' : 'border-gray-500')}`} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />

                <label className='font-semibold text-lg'>Upload Images</label>
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} multiple className='w-full lg:w-[80%] p-3 focus:outline-none border rounded-md' />

                <div className='lg:w-72 lg:h-20 flex'>
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative m-1">
                      <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} className="w-full h-full object-cover rounded-md" />
                      <button onClick={() => handleRemoveImage(index)} className="top-0 right-1 absolute w-[20px] h-[20px] text-2xl text-red-600"><IoIosCloseCircle /></button>
                    </div>
                  ))}
                </div>
                {showMaxLimitMessage && <p className="text-red-500">Maximum limit of 3 images exceeded.</p>}
              </div>
            </div>

            <div className='pt-12 lg:pl-5 p-2'>
              <div className='flex flex-col justify-center items-start space-y-4'>
                <label className='font-semibold text-lg'>Required Option<span className='text-red-600'>*</span></label>
                <select
                  className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md bg-white ${focusedField === 'selectedOption' ? 'border-green-500' : (formError && !selectedOption.trim() ? 'border-red-500' : 'border-gray-500')}`}
                  onFocus={() => setFocusedField('selectedOption')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleOptionChange}
                  value={selectedOption}
                >
                  <option value="">Select an option</option>
                  {selected.options.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                  ))}
                </select>
                {selectedOption === 'Others' && (
                  <div className='w-full'>
                    <label className='font-semibold text-lg'>Other Option<span className='text-red-600'>*</span></label>
                    <input type="text" value={otherOptionInput} onChange={(e) => setOtherOptionInput(e.target.value)} placeholder='Enter Other Option' className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md ${focusedField === 'otherOption' ? 'border-blue-500' : (formError && !otherOptionInput.trim() ? 'border-red-500' : 'border-gray-500')}`} onBlur={() => setFocusedField(null)} />
                  </div>
                )}
                <label className='font-semibold text-lg'>Phone Number<span className='text-red-600'>*</span></label>
                <input
                  type="number"

                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder='Enter the Phone Number'
                  className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md no-spinner ${focusedField === 'phoneNumber' ? 'border-green-500' : (formError && !phoneNumber.trim() ? 'border-red-500' : 'border-gray-500')}`}
                  onFocus={() => setFocusedField('phoneNumber')}
                  onBlur={() => setFocusedField(null)}
                />

                <label className='font-semibold text-lg'>Address<span className='text-red-600'>*</span></label>
                <textarea
                  value={address}
                  onChange={handleAddressChange}
                  placeholder='Address....'
                  rows="5"
                  className={`w-full lg:w-[80%] p-3 focus:outline-none border rounded-md ${focusedField === 'address' ? 'border-green-500' : (formError && !address.trim() ? 'border-red-500' : 'border-gray-500')}`}
                  onFocus={() => setFocusedField('address')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className='p-5 space-x-3'>
                <input type="checkbox" checked={termsAgreed} onChange={handleTermsChange} id="terms" name="terms" />
                <label htmlFor="terms">I agree to the <span className='text-red-500'><a href="#">terms and conditions.</a></span></label>
              </div>

              <div className='flex justify-center items-center gap-5 w-full'>
                <button onClick={handleSubmitForm} className='px-4 py-2 rounded-md font-medium bg-blue-900 text-white'>{submitButtonText}</button>
                <button onClick={handleReset} className='px-4 py-2 rounded-md font-medium bg-red-700 text-white'>Reset</button>
                <button onClick={onBack} className='font-semibold text-blue-800'> back</button>
              </div>
              <div className='flex flex-col justify-center items-center pb-24 pt-2'>
                {formError && <p className="text-red-500 text text-center">{formError}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;