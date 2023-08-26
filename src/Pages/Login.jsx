import React, { useState } from 'react'
import './index.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate= useNavigate();
  const [data, setData] = useState({
    email : "", 
    password : "",
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
      const resp = await axios.post('http://localhost:3001/login', {
        email : data.email, 
        password : data.password
      });
      if(resp.status === 200){
        localStorage.setItem('token', "ACCESS");
        localStorage.setItem('_id', resp.data);
        navigate(0);
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
          <h1>Sign In</h1>
        </div>
        
        <div className="c-input">
          <input value={data.email} onChange={handleChange}  type="text" name='email' placeholder='Your Email Address'/>
        </div>
        <div className="c-input">
          <input value={data.password} onChange={handleChange}  type="text" name='password' placeholder='Your Password' />
        </div>
        
        <div className="c-input">
          <button type='submit'>Login</button>
        </div>
        <div className="c-input">
          <a href="/register">No Account? Click here</a>
        </div>
        <div className="c-input">
          <a href="/forgot-password">Forgot Password? Click here</a>
        </div>
      </form>
    </div>
  )
}

export default Login