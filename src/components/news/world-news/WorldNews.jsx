import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import WorldNewsCards from './WorldNewsCards';
import WorldNewsWideCards from './WorldNewsWideCards';
import './world-news.css';

const queryClient = new QueryClient();

const WorldNews = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <GetWorldNews />
    </QueryClientProvider>
  );
};

const GetWorldNews = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&categories=entertainment&locale=us,ca&language=en&limit=1').then(res =>
        res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.data[0])  

  return (
    <div className="world-news__container">
        <h2>Entertainment News</h2>
        <img src={data.data[0].image_url} className="world-news__main-image" />
        <h3>{data.data[0].title}</h3>
        <div className="world-news__date-cat">
            <p>{data.data[0].published_at}</p>
            <p>{data.data[0].categories}</p>
        </div>
        <p>{data.data[0].description}</p>
        <button>Continue Reading</button>
        <WorldNewsCards />
        <WorldNewsWideCards />
    </div>
    
  );
};

export default WorldNews;