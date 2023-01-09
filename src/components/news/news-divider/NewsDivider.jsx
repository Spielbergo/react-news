import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import './news-divider.css';

const queryClient = new QueryClient();

const NewsDivider = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <GetNewsDivider />
    </QueryClientProvider>
  );
};

const GetNewsDivider = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&categories=sports&locale=us,ca&language=en&limit=4').then(res =>
        res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.data[0])  

    return (
        <div>
            <h2>Sports Snapshot</h2>
            <div className="news-divider__container">            
            {/* USE A CSS BACKGROUND IMAGE HERE!!!!!!! FIX THISSSSSS */}
                <div className="news-divider__images">
                    <img src={data.data[0].image_url} />
                    <h3 className="news-divider__title">{data.data[0].title}</h3>
                    <p>{data.data[0].description}</p>
                </div>

                <div className="news-divider__images">
                    <img src={data.data[1].image_url} />
                    <h3 className="news-divider__title">{data.data[1].title}</h3>
                    <p>{data.data[1].description}</p>        
                </div> 
            </div>
        </div>
    )
}

export default NewsDivider;