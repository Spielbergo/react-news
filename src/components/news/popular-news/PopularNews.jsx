import React from 'react';
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './popular-news.css';

const queryClient = new QueryClient();

const PopularNews = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <GetPopularNews />
    </QueryClientProvider>
  );
};

const GetPopularNews = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&language=en&limit=4').then(res =>
        res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.data[0])  

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
            <Link to={data.data[0].url}>
                <img src={data.data[0].image_url} />
                <h3>{data.data[0].title}</h3>
                <div className="popular-news__date-cat">
                    <p>{data.data[0].published_at}</p>
                    <p>{data.data[0].categories}</p>
                </div>   
            </Link>             
            </div>
            <div className="popular-news__card">
            <Link to={data.data[1].url}>
            <img src={data.data[1].image_url} />
                <h3>{data.data[1].title}</h3>
                <div className="popular-news__date-cat">
                    <p>{data.data[1].published_at}</p>
                    <p>{data.data[1].categories}</p>
                </div> 
            </Link>
            </div>
            <div className="popular-news__card">
            <Link to={data.data[2].url}>
            <img src={data.data[2].image_url} />
                <h3>{data.data[2].title}</h3>
                <div className="popular-news__date-cat">
                    <p>{data.data[2].published_at}</p>
                    <p>{data.data[2].categories}</p>
                </div> 
            </Link>
            </div>
        </div>
    </div>
    )
}

export default PopularNews;