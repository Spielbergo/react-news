import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './popular-news.css';

const PopularNews = () => {
  return (
    <div className="popular-news__container">
        <div className="popular-news__text">
            <div className="popular-news__title">
                <h2>Popular News</h2>
            </div>
            <div className="popular-new__nav">
                <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
                <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
            </div>
        </div>
        <div className="popular-news__cards">
            <div className="popular-news__card">
                <img src="https://via.placeholder.com/350x350.png?text=sidebar-1" />
                <h3>Supreme court girds for fight over census citizenship question</h3>
                <div className="popular-news__date-cat">
                    <p>Date</p>
                    <p>Category</p>
                </div>                
            </div>
            <div className="popular-news__card">
                <img src="https://via.placeholder.com/350x350.png?text=sidebar-1" />
                <h3>Supreme court girds for fight over census citizenship question</h3>
                <div className="popular-news__date-cat">
                    <p>Date</p>
                    <p>Category</p>
                </div>
            </div>
            <div className="popular-news__card">
                <img src="https://via.placeholder.com/350x350.png?text=sidebar-1" />
                <h3>Supreme court girds for fight over census citizenship question</h3>
                <div className="popular-news__date-cat">
                    <p>Date</p>
                    <p>Category</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PopularNews;