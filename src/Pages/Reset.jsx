import React, { useState } from 'react'
import './index.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Reset = () => {
  const navigate= useNavigate();
  const [data, setData] = useState({
    password : "",
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
      const resp = await axios.post('http://localhost:3001/resetPassword', {
        password : data.password, 
        email : localStorage.getItem('email')
      });
      if(resp.status === 200){
        localStorage.removeItem('email');
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
          <h1>Reset Password</h1>
        </div>
        <div className="c-input">
          <input value={data.password} onChange={handleChange}  type="text" name='password' placeholder='Your Password' />
        </div>
        <div className="c-input">
          <input value={data.confPassword} onChange={handleChange} type="text" name='confPassword' placeholder='Confirm Your Password' />
        </div>
        <div className="c-input">
          <button type='submit'>Reset</button>
        </div>
        
      </form>
    </div>
  )
}

export default Reset