import React from 'react'
import './index.css';
import { useNavigate } from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTop';
const Navbar = () => {
    
    ScrollToTopOnMount();

    const token = localStorage.getItem('token');
    const nav = useNavigate();

  return (
    <nav className='Navbar'>
        <div className="partOne">
            <span onClick={()=>{nav("/")}}>DevDiaries</span>
        </div>
        <div className="partTwo">
        {
            !token ? 
            <React.Fragment>
                <button className='Linkos' onClick={()=>{nav("/login")}}   >Login   </button>
                <button className='Linkos' onClick={()=>{nav("/register")}}>Register</button>
            </React.Fragment>
            :
            <React.Fragment>
                <button className='Linkos' onClick={()=>{nav(`/profile/${localStorage.getItem('_id')}`)}}   >Profile   </button>
                <button className='Linkos' onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('_id'); nav(0) }}>Logout</button>
            </React.Fragment>
        }
        </div>
    </nav>
  )
}

export default Navbar