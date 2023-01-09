import React from "react";

import InfobarTop from "./components/infobars/InfobarTop";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import TrendingNews from "./components/news/trending-news/TrendingNews";
import PopularNews from "./components/news/popular-news/PopularNews";
import NewsDivider from "./components/news/news-divider/NewsDivider";
import WorldNews from "./components/news/world-news/WorldNews";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import './app.css'

function App() {
  return (
    <div className="App">
      <section>
        <InfobarTop />
        <Navigation />
      </section>
        <Hero />
      <section>
        <TrendingNews />
      </section>
      <section>
        <PopularNews />
      </section>
      <section className="bg-gradient-grey">
        <NewsDivider />
      </section>
      <section className="world-news-section">
        <WorldNews />
        <Sidebar />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
