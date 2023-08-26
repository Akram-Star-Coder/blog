import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import './index.css';


const CopyLinkButton = () => {

  const [isClicked, setIsClicked] = useState(false);
  const handleCopyLink = () => {

    const currentURL = window.location.href;

    clipboardCopy(currentURL)
      .then(() => {
        setIsClicked(true);
        // You can show a success message or perform any other action here
      })
      .catch(error => {
        setIsClicked(false);
        console.error('Error copying link:', error);
        // You can show an error message or perform error handling here
      });
  };

  return (
    <button className={!isClicked ? "clickToCopy" : "clickToCopy nobb"} onClick={handleCopyLink}>{!isClicked ? "Copy Link" : "Copied ✔" }</button>
  );
};

export default CopyLinkButton;
