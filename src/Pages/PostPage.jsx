import React, { useEffect, useState } from 'react'
import './index.css'
import CompoPostPage from '../Components/CompoPostPage'
import Navbar from '../Components/Navbar';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const PostPage = () => {

  const path = useParams();
  const idOfPost = path.id;

 
    const nav = useNavigate();

    const [data, setData] = useState(null);


    useEffect(()=>{
      const fetcgInfo = async()=>{
        try{  
          const resp  = await axios.get(`http://localhost:3001/getInfos/${idOfPost}`);
          if(resp.status === 200){
            const dataaa = await resp.data;
            setData(dataaa);
          }
          else{
            alert('Error Occuried Somewhere... please Refresh!');
          }
        }
        catch(e){
          console.log(e.message);
        }
      }
      fetcgInfo();
    }, []);



    return (
    <div className='PostPage'>
        <Navbar />
        {
          data !== null &&
          <CompoPostPage data={data} />
        }
    </div>
  )
}

export default PostPage