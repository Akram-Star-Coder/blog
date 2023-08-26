import React, { useState } from 'react'
import './index.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate= useNavigate();
  const [data, setData] = useState({
    email : "", 
    password : "",
    fullName : "", 
    confPassword : "" 
  });
  const handleChange=(e)=>{
    setData({
      ...data, 
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      console.log(data);
      const resp = await axios.post('http://localhost:3001/register', {
        fullName : data.fullName, 
        email : data.email, 
        password : data.password
      });
      if(resp.status === 200){
        navigate('/login');
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
          <h1>Sign Up</h1>
        </div>
        <div className="c-input">
          <input value={data.fullName} onChange={handleChange}  type="text" placeholder='Full Name' name='fullName' />
        </div>
        <div className="c-input">
          <input value={data.email} onChange={handleChange}  type="text" name='email' placeholder='Your Email Address'/>
        </div>
        <div className="c-input">
          <input value={data.password} onChange={handleChange}  type="text" name='password' placeholder='Your Password' />
        </div>
        <div className="c-input">
          <input value={data.confPassword} onChange={handleChange} type="text" name='confPassword' placeholder='Confirm Your Password' />
        </div>
        <div className="c-input">
          <button type='submit'>Regsiter</button>
        </div>
        <div className="c-input">
          <a href="/login">Already an account? Click here</a>
        </div>
      </form>
    </div>
  )
}

export default Register