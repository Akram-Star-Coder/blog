import React, { useEffect, useState, useRef } from 'react'
import './index.css';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


const Post2 = ({post}) => {

    const divToToggle = useRef(null);

    const [showpopUp, setShowPopUpCreate]=useState(false);
    const path = useParams();
    const nav = useNavigate();
    const authorId = path.id;
    const handleClickOutside = (event) => {
        if (divToToggle.current && !divToToggle.current.contains(event.target)) {
          setShowPopUpCreate(false);
        }
      };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const maxChars = 310;
    const shortContent = post.content.length > maxChars ? post.content.slice(0, maxChars) + '...' : post.content;
    function formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString('en-GB', options);
  }

  function extractHours(date) {
      
      const hours  = new Date(date).getHours();;
      const minutes  = new Date(date).getMinutes();; 
      
      return `${hours}:${minutes}`;
  }

  return (
    <>
    <div className={showpopUp ? "showpopUp showshowshowpopUp" : "showpopUp"}>
      <div className="showpopUpP"  ref={divToToggle}>
        <div className="titleOfPost">
          <input type="text" placeholder='Enter the title of the post' />
        </div>
        <div className="contentOfPost">
          <textarea placeholder='Enter the content of the post' name="description" id="postContent" ></textarea>
        </div>
        <div className="titleOfPost">
          <button>Edit Post</button>
        </div>
      </div>
    </div>

    <div className='Post' >
        <div onClick={()=>{nav(`/post/${post._id}`)}} className="postP1">
            <img onClick={()=>{nav(`/post/${post._id}`)}} src={post.image} alt="" />
        </div>
        <div className="postP2">
            <div onClick={()=>{nav(`/post/${post._id}`)}} className="title">
                {post.title}
            </div>
            <div onClick={()=>{nav(`/post/${post._id}`)}} className="littleDesc">
                {shortContent}
            </div>
            <div className="publishedAt">
            {extractHours(post.createdAt)} • {formatDate(post.createdAt)}
        {
            localStorage.getItem('_id') === authorId &&
            <>
            <button className='trash'><i className='fa-solid fa-trash'></i></button>
            <button onClick={()=>{setShowPopUpCreate(true)}} className='edit'><i className='fa-solid fa-edit'></i></button>
            </>
        }
            </div>
        </div>
    </div>
    </>
  )
}

export default Post2