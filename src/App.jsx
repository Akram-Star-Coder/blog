import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Reset from './Pages/Reset';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/Forgot';
import P404 from './Pages/P404';
import OTP from './Pages/OTP';
import Profile from './Pages/Profile';
import PostPage from './Pages/PostPage';

const App = () => {

  const token = localStorage.getItem('token');

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={  token ? <Navigate to='/'/> : <Register />  } />
          <Route path='/login' element={  token ? <Navigate to='/'/> : <Login />  } />
          <Route path='/forgot-password' element={  token ? <Navigate to='/'/> : <Forgot />  } />
          <Route path='/otp' element={  <OTP />  } />
          <Route path='/reset-password' element={   <Reset /> } />
          <Route path='*' element={<P404 />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App