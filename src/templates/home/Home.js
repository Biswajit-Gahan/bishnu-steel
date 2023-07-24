import React from "react";
import { Container } from "./home.styles";
import factoryVideo from "../../assets/videos/factory-video.mp4";
import AboutProduct from "../../components/about.product/AboutProduct";
import posterImage from "../../assets/images/steel-pipes.jpg"

const Home = () => {
  return (
    <Container>
      {/* VIDEO CONTAINER */}
      <div className="video-container">
        <video className="brand-video" src={factoryVideo} autoPlay muted loop poster={posterImage} />
        <div className="hero-container">
          <h1 className="hero-text">The power of steel,<br /><span className="hero-bold">The Beauty of Design.</span></h1>
          <p className="hero-tag">We understand the importance of design in the stainless steel tube industry. Our dedicated team work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.</p>
          <div className="header-bottons-container">
            <button type="button" className="header-our-products-button header-button">Our Products</button>
            <button type="button" className="header-know-more-button header-button">Know More</button>
          </div>
        </div>
      </div>

      {/* ABOUT STEELS */}
      <section className="about-steels-container">
        <AboutProduct />
      </section>
    </Container>
  );
};

export default Home;