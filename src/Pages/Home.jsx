import React, { useEffect, useState } from 'react'
import './index.css';
import Navbar from '../Components/Navbar';
import Post from '../Components/Post';
import axios from 'axios';


const Home = () => {


  const [data, setData] = useState(null);

  useEffect(()=>{
    const fetch = async ()=>{
      try{

        const resp = await axios.get('http://localhost:3001/getAllPosts');
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
    <div className='Home'>
      <Navbar />
      {
        data && data.lenght !== 0 ?     
          data.map((post, index)=>{
            return(
              <Post  post={post} key={index} />
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

export default Home