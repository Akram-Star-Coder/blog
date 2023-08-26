import React from 'react'
import './index.css';
import { useNavigate } from "react-router-dom";


const Post = ({post}) => {

    function formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-GB', options);
    }

    function extractHours(date) {
        
        const hours  = new Date(date).getHours();;
        const minutes  = new Date(date).getMinutes();; 
        
        return `${hours}:${minutes}`;
    }
    const maxChars = 310;
    const shortContent = post.content.length > maxChars ? post.content.slice(0, maxChars) + '...' : post.content;
    const nav = useNavigate();
  
    return (
    <div className='Post' >
        <div onClick={()=>{nav(`/post/${post._id}`)}} className="postP1">
            <img onClick={()=>{nav(`/post/${post._id}`)}} src={post.image} alt="" />
        </div>
        <div className="postP2">
            <div onClick={()=>{nav(`/post/${post._id}`)}} className="title">
                {post.title}
            </div>
            <div onClick={()=>{nav(`/post/${post._id}`)}} className="littleDesc">
             {
               shortContent
             }
            </div>
            <div className="publishedAt">
            <span onClick={()=>{nav(`/profile/${post.userId}`)}}>See Author </span>&nbsp;• {extractHours(post.createdAt)} • {formatDate(post.createdAt)} 
            </div>
        </div>
    </div>
  )
}

export default Post