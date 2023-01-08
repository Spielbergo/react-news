import React from 'react';

import './news-divider.css';

const NewsDivider = () => {
  return (
    <div className="news-divider__container">
    {/* USE A CSS BACKGROUND IMAGE HERE!!!!!!! */}
        <div className="news-divider__images">
            <img src="https://via.placeholder.com/550x550.png?text=NEWS DIVIDER-1" />
            <h3 className="news-divider__title">Return of the bench seat Concept show space big for sofas </h3>
            <div className="news-divider__date-cat">
                <p>Date</p>
                <p>Category</p>
            </div>
            
        </div>
        <div className="news-divider__images">
            <img src="https://via.placeholder.com/550x550.png?text=NEWS DIVIDER-2" />
            <h3 className="news-divider__title">Return of the bench seat Concept show space big for sofas </h3>
            <div className="news-divider__date-cat">
                <p>Date</p>
                <p>Category</p>
            </div>
        </div> 
    </div>
  )
}

export default NewsDivider;