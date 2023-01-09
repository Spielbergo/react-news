import React, { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import './trending-news.css';

const queryClient = new QueryClient();

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

        <QueryClientProvider client={queryClient}>
            <GetTrendingNews />
        </QueryClientProvider>

    </div>
  );
};

function GetTrendingNews() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.thenewsapi.com/v1/news/top?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&locale=us,ca').then(res =>
        res.json()
        )
    )
        
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message    

    return (
    <div className="trending-news__section">
        {/* USE BACKGROUND IMAGE HERE */}
        
        <div className="trending-news__main-image">
        {/* <Link to={data.data[4].url}> */}
            <img src={data.data[4].image_url} />
            <div>
                <h3>{data.data[4].title}</h3>
                <p>{data.data[4].description}</p>
            </div>
        {/* </Link> */}
        </div>

        <div className="trending-news__sidebar">
            <div>
            {/* <Link to={data.data[0].url}> */}
                <img src={data.data[0].image_url}/>
                <div className="trending-news__sidebar-item">
                    <h3>{data.data[0].title}</h3>
                    <p>{data.data[0].description}</p>
                </div>
            {/* </Link> */}
            </div>

            <div>
            {/* <Link to={data.data[1].url}> */}
                <img src={data.data[1].image_url}/>
                <div className="trending-news__sidebar-item">
                    <h3>{data.data[1].title}</h3>
                    <p>{data.data[1].description}</p>
                </div>
            {/* </Link> */}
            </div>

            <div>
            {/* <Link to={data.data[2].url}> */}
                <img src={data.data[2].image_url}/>
                <div className="trending-news__sidebar-item">
                    <h3>{data.data[2].title}</h3>
                    <p>{data.data[2].description}</p>
                </div>
            {/* </Link> */}
            </div>

            <div>
            {/* <Link to={data.data[3].url}> */}
                <img src={data.data[3].image_url}/>
                <div className="trending-news__sidebar-item">
                    <h3>{data.data[3].title}</h3>
                    <p>{data.data[3].description}</p>
                </div>
            {/* </Link> */}
            </div>
        </div>
    </div>
    );
};

export default TrendingNews;