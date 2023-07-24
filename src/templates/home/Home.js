import React from "react";
import { Container } from "./home.styles";
import factoryVideo from "../../assets/videos/factory-video.mp4";

const Home = () => {
  return (
    <Container>
      {/* VIDEO CONTAINER */}
      <div className="video-container">
        <video className="brand-video" src={factoryVideo} autoPlay muted loop />
        <div className="hero-container">
          <h1 className="hero-text">The sun never sets on <br /><span className="hero-bold">Durability at Suncity.</span></h1>
          <p className="hero-tag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at quaerat, eveniet iusto totam non magni ducimus excepturi fugiat quod magnam accusantium repellendus neque sunt necessitatibus nihil quia eos blanditiis!</p>
          <div className="header-bottons-container">
            <button type="button" className="header-our-products-button header-button">Our Products</button>
            <button type="button" className="header-know-more-button header-button">Know More</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;