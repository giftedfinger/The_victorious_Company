import React, { useState } from 'react';
import './form.css'; // Import the CSS file for form styling
import Button from '../../button/button';

const Form = () => {
  const [FirstName, setFrstName] = useState('');
   const [LastName, setLasttName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('FirstName:', FirstName);
    console.log('LastName:', LastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Prayer Request:', prayerRequest);
  };

  return (
      
    <form onSubmit={handleSubmit} className="form-container">
      <p>Let us have your details</p>
      <div className="row100">
     <div className='col'>
      <div className='inputBox'>
        <input
          type="text"
          id="Firstname"
          value={FirstName}
          onChange={(e) => setFrstName(e.target.value)}
          className="input-field"
           required='required'
        />
        <span className='text'>First Name</span>
         <span className='line'></span> 
      </div>
        </div>

             <div className='col'>
      <div className='inputBox'>
        <input
          type="text"
          id="LastName"
          value={LastName}
          onChange={(e) => setLasttName(e.target.value)}
          className="input-field"
           required='required'
        />
        <span className='text'>Last Name</span>
         <span className='line'></span> 
      </div>
        </div>
          <div className='col'>
      <div className='inputBox'>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
           required='required'
        />
        <span className='text'>Email</span>
         <span className='line'></span> 
      </div>
        </div>

             <div className='col'>
      <div className='inputBox'>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input-field"
           required='required'
        />
        <span className='text'>Phone Number</span>
         <span className='line'></span> 
      </div>
        </div>

               <div className='col'>
      <div className='inputBox textarea'>
        <textarea
          type="text"
          id="text"
          value={prayerRequest}
          onChange={(e) => setPrayerRequest(e.target.value)}
          className="input-field"
           required='required'
        />
        <span className='text'>Type your Prayer Request</span>
         <span className='line'></span> 
      </div>
        </div>

       
           </div>
      

<Button Btn_text='Submit' className="button"/>
    </form>
    
  );
};

export default Form;
