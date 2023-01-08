import React from 'react';

import WorldNewsCards from './WorldNewsCards';
import WorldNewsWideCards from './WorldNewsWideCards';
import './world-news.css';

const WorldNews = () => {
  return (
    <div className="world-news__container">
        <h2>World News</h2>
        <img src="https://via.placeholder.com/550x550.png?text=World News" className="world-news__main-image" />
        <h3>This gun is advertised as the most popular gun in American crime</h3>
        <div className="world-news__date-cat">
            <p>Date</p>
            <p>Category</p>
        </div>
        <p>Sitting on a working-class comme  dows of an easy above-ground rail line, a group cal led Make the Road at New York's busy street-level offices are easy to miss. But its mission to support an easy above-ground rail line, a group cal led Make the Road New York's..</p>
        <button>Continue Reading</button>
        <WorldNewsCards />
        <WorldNewsWideCards />
    </div>
    
  );
};

export default WorldNews;