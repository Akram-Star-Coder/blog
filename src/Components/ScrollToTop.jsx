import React, { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return <div>Your component content here</div>;
}

export default ScrollToTopOnMount;
