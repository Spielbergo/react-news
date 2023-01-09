import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const WorldNewsWideCards = () => {
    return (
      <QueryClientProvider client={queryClient}>
          <GetWorldNewsWideCards />
      </QueryClientProvider>
    );
  };

const GetWorldNewsWideCards = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.thenewsapi.com/v1/news/all?api_token=AkjNQvEVkTa2ZOYNIVz9wZdethZ6UuD6h8f1IgXe&categories=health&locale=us,ca&language=en&limit=4').then(res =>
    res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.data[0]) 

    return (
        <div>
            <div className="world-news-wide__cards">
            <h2>Health and Wellness</h2>
                <div>
                    <img src={data.data[0].image_url}/>
                    <div className="world-news-wide__cards-item">
                        <h3>{data.data[0].title}</h3>
                        <p>{data.data[0].description}</p>
                    </div>
                </div>

                <div>
                    <img src={data.data[1].image_url}/>
                    <div className="world-news-wide__cards-item">
                        <h3>{data.data[1].title}</h3>
                        <p>{data.data[1].description}</p>
                    </div>
                </div>

                <div>
                    <img src={data.data[2].image_url}/>
                    <div className="world-news-wide__cards-item">
                        <h3>{data.data[2].title}</h3>
                        <p>{data.data[2].description}</p>
                    </div>
                </div>

                <div>
                    <img src={data.data[3].image_url}/>
                    <div className="world-news-wide__cards-item">
                    <h3>{data.data[3].title}</h3>
                    <p>{data.data[3].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldNewsWideCards;