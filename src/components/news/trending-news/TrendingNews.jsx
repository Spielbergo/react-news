import React, { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import './trending-news.css';

const TrendingNews = () => {
  return (
    <div className="trending-news__container">          
        <Fragment>
            <div className="trending-news__navbar">
                <h2 className="trending-news__title">Trending News</h2>
                <div className="trending-news__nav">
                    <Link className="trending-news__nav-link" to='/'>
                        Latest
                    </Link>
                    <Link className="trending-news__nav-link" to='/breaking'>
                        Trending
                    </Link>
                    <Link className="trending-news__nav-link" to='/trending'>
                        Featured
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
        <div className="trending-news__section">
        
            <div className="trending-news__main-image">
                <img src="https://via.placeholder.com/720x720.png?text=SLIDE-1"/>
            </div>
            <div className="trending-news__sidebar">
                <div>
                    <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
                    <div className="trending-news__sidebar-item">
                        <h3>Headling</h3>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
                    <div className="trending-news__sidebar-item">
                        <h3>Headling</h3>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
                    <div className="trending-news__sidebar-item">
                        <h3>Headling</h3>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
                    <div className="trending-news__sidebar-item">
                    <h3>Headling</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TrendingNews