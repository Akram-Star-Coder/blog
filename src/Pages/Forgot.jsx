import React, { useState } from 'react'
import './index.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Forgot = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const resp = await axios.post('http://localhost:3001/forgot', {
        email : email, 
      });
      if(resp.status === 200){
        localStorage.setItem('email', email);
        navigate('/otp');
      }
      else{
        console.log(resp.status);
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
          <h1>Enter Your Email</h1>
        </div>
        
        <div className="c-input">
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  type="text" name='email' placeholder='Your Email Address'/>
        </div>
      
        <div className="c-input">
          <button type='submit'>Send OTP</button>
        </div>
        
      </form>
    </div>
  )
}

export default Forgot