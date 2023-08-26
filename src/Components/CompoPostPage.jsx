import React, { useEffect } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom'; // Removed unused import: useParams
import CopyLinkButton from './ClickToCopy';
import ScrollToTopOnMount from './ScrollToTop';

const CompoPostPage = ({ data }) => {


    const nav = useNavigate();

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
        <div className='CompoProfile'>
            <div className="compo1">
                <img className='img1' src={data.image} alt="" />
            </div>
            <div className="rowP1 publishedAt">
                <span onClick={() => { nav(`/profile/${data.userId}`); }}>See Author </span>
                <>{extractHours(data.createdAt)} • {formatDate(data.createdAt)}</>
            </div>
            <div className="rowP2">
                {data.title}
            </div>
            <div className="rowP3">
                <pre>
                {data.content}
                </pre>
            </div>
            <div className="rowP3">
                    <CopyLinkButton />
                </div>
        </div>
    );
}

export default CompoPostPage;
