import React, { useEffect, useState } from 'react'
import './index.css';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import CompoProfile from '../Components/CompoProfile';
import Post2 from '../Components/Post2';
import {useParams} from 'react-router-dom'


const Profile = () => {


  const [data, setData] = useState(null);
  const path = useParams();
  const iduser  =path.id

  useEffect(()=>{
    const fetch = async ()=>{
      try{

        const resp = await axios.get(`http://localhost:3001/getAllPosts/${iduser}`);
        if(resp.status === 200){
          const dtaa = await resp.data;
          setData(dtaa);
        }
        else{
          alert('Oops, Error Fetching All Posts');
        }
      }
      catch(e){
          console.log(e.message);
      }
    }
    fetch();
  })



  return (
    <div className='Profile'>
        <Navbar />
        <CompoProfile />


        {
        data && data.lenght !== 0 ?        
          data.map((post, index)=>{
            return(
              <Post2  post={post} key={index} />
            )
          })
          :
          <div className='NoPostyet'>
            Loading...
          </div>
        }
    </div>
  )
}

export default Profile