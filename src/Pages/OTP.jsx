import React, { useState } from 'react'
import './index.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const OTP = () => {
  const navigate= useNavigate();
  const [OTP, setOTP] = useState("")
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const resp = await axios.post('http://localhost:3001/verifyOTP', {
        OTP : OTP, 
        email : localStorage.getItem('email')
      });
      if(resp.status === 200){
        navigate('/reset-password');
      }
      else{
        console.log(resp.status)
      }
    }
    catch(er){
      console.log(er.message);
      console.log(er);
    }
  }
  
  return (
    <div className='Login'>
      <form onSubmit={handleSubmit} className="containerLogin">
        <div className="c-input">
          <h1>Verify The OTP sent to your Email</h1>
        </div>
        
        <div className="c-input">
          <input value={OTP} onChange={(e)=>{setOTP(e.target.value)}}  type="text" name='OTP' placeholder='Enter the OTP sent to your email'/>
        </div>
      
        <div className="c-input">
          <button type='submit'>Verify OTP</button>
        </div>
        
      </form>
    </div>
  )
}

export default OTP