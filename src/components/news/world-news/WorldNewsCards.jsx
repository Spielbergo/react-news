import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const WorldNewsCards = () => {
    return (
      <QueryClientProvider client={queryClient}>
          <GetWorldNewsCards />
      </QueryClientProvider>
    );
  };

const GetWorldNewsCards = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&categories=entertainment&locale=us,ca&language=en&limit=2').then(res =>
        res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.data[0]) 

    return (
        <div className="world-news__container">
            <div className="world-news__cards">
                <div className="world-news__card">
                    <img src={data.data[0].image_url} />
                    <h3>{data.data[0].title}</h3>
                    <p>{data.data[0].description}</p>
                    <div className="world-news__date-cat">
                        <p>{data.data[0].published_at}</p>
                        <p>{data.data[0].categories}</p>
                    </div>                
                </div>
                <div className="world-news__card">
                    <img src={data.data[1].image_url} />
                    <h3>{data.data[1].title}</h3>
                    <p>{data.data[1].description}</p>
                    <div className="world-news__date-cat">
                        <p>{data.data[1].published_at}</p>
                        <p>{data.data[1].categories}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WorldNewsCards;