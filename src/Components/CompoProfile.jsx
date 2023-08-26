import React, { useEffect, useState, useRef } from 'react'
import './index.css';
import { useParams } from 'react-router-dom';
import ScrollToTopOnMount from './ScrollToTop';
import axios from 'axios';


const CompoProfile = () => {

  const [showpopUp, setShowPopUpCreate]=useState(false);
  const path = useParams();
  const _id = path.id;
  const divToToggle = useRef(null);


  const handleClickOutside = (event) => {
    if (divToToggle.current && !divToToggle.current.contains(event.target)) {
      setShowPopUpCreate(false);
    }
  };
  
  ScrollToTopOnMount();
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const [data, setData] = useState({
    content : "", 
    title : "",
    image : ''
  });

  const handleChange = (e)=>{
    setData({
      ...data, 
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(data.title === '' || data.content === ""){
      console.log('Empty Fields');
    }
    else{
      try{
        const resp = await axios.post('http://localhost:3001/create',{
          title : data.title, 
          content : data.content, 
          image:  data.image,
          userId : localStorage.getItem('_id')
        });
        if(resp.status === 200){
          setShowPopUpCreate(false);
          setData({
            title : "", 
            content : "", 
            image : ""
          })
          alert('New Post Created Successfully');
        }
        else{
          alert("Oops, something went wrong!");
        }
      }
      catch(er){
        alert("Oops, something went wrong!");
        console.log(er.message);
      }
    }
  }


  const [n, setN] = useState(null);


  const GetNumberOfPost = async ()=>{    
      try{
        const resp = await axios.get(`http://localhost:3001/getAllPosts/${_id}`);
        if(resp.status === 200){
          setN(resp.data.length);
        }
      }
      catch(er){
        alert("Oops, something went wrong!");
        console.log(er.message);
      }
    
  }
  useEffect(()=>{
    GetNumberOfPost();
  }, [showpopUp]);
  




  return (
    <>
     
    <div className={showpopUp ? "showpopUp showshowshowpopUp" : "showpopUp"}>
      <form  onSubmit={handleSubmit} className="showpopUpP"  ref={divToToggle}>
        <div className="titleOfPost">
          <input  spellCheck={false} value={data.title} onChange={handleChange} name='title' type="text" placeholder='Enter the title of the post' />
        </div>
        <div className="titleOfPost">
          <input  spellCheck={false} value={data.image} onChange={handleChange} name='image' type="text" placeholder='Enter the link of the image' />
        </div>
        <div className="contentOfPost">
          <textarea value={data.content} spellCheck={false} onChange={handleChange} name='content' placeholder='Enter the content of the post'  id="postContent" ></textarea>
        </div>
        <div className="titleOfPost">
          <button type='submit'>Create New Post</button>
        </div>
      </form>
    </div>
    
    <div className='CompoProfile'>
        <div className="compo1">
            <img className='img1' src="https://t4.ftcdn.net/jpg/05/54/47/79/360_F_554477926_yKEcMeDTD1oLqKQCjvpryeT5zHLMunNh.jpg" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='img2' alt="" />
        </div>
        <div className="compo2">
            Akram Elbasri 
        </div>
        {
          localStorage.getItem('_id') === _id ? 
          <div className="compo3">
            <button onClick={()=>{setShowPopUpCreate(true)}}>Create New Post</button>
          </div>
          :
          <div className="compo3 compo3whithoutHeight">
            
            {
              n && 
              <button className='NoPointerEvents'>{n} posts</button>

            }
           
          </div>
        }
    </div>
  </>
  )
}

export default CompoProfile