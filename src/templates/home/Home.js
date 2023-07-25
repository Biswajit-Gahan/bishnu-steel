import React from "react";
import { Container } from "./home.styles";
import factoryVideo from "../../assets/videos/factory-video.mp4";
import AboutProduct from "../../components/about.product/AboutProduct";
import posterImage from "../../assets/images/steel-pipes.jpg"
import ProductCard from "../../components/product.card/ProductCard";
import roundSteel from "../../assets/images/round-steels.jpg";
import squareSteel from "../../assets/images/square.jpg";
import rectangleSteel from "../../assets/images/rectangle-steel.jpg";

const Home = () => {
  return (
    <Container>
      {/* VIDEO CONTAINER */}
      <div className="video-container">
        {/* BRAND VIDEO */}
        <video className="brand-video" src={factoryVideo} autoPlay muted loop poster={posterImage} />

        {/* HERO CONTAINER */}
        <div className="hero-container">
          {/* HERO TEXTS */}
          <h1 className="hero-text">The power of steel,<br /><span className="hero-bold">The Beauty of Design.</span></h1>
          <p className="hero-tag">We understand the importance of design in the stainless steel tube industry. Our dedicated team work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.</p>

          {/* BUTTONS */}
          <div className="header-bottons-container">
            <button type="button" className="header-our-products-button header-button">Our Products</button>
            <button type="button" className="header-know-more-button header-button">Know More</button>
          </div>
        </div>
      </div>

      {/* ABOUT STEELS */}
      <section className="about-steels-container">
        {/* ABOUT PRODUCT COMPONENT */}
        <AboutProduct />
      </section>

      {/* PRODUCT RANGE */}
      <div className="product-range-container">
        <div className="product-range-container-wrapper">
          {/* PRODUCT RANGE HEADER */}
          <div className="product-range-header">
            <h2 className="product-range-header-text">Our Products Range</h2>
            <div className="header-divider"></div>
          </div>

          {/* PRODUCT RANGE CARDS CONTAINER */}
          <div className="product-range-cards-container">
            {/* PRODUCT RANGE COMPONENT */}
            <ProductCard productImg={roundSteel} productName={"Round Stainless Tubes"} />
            <ProductCard productImg={squareSteel} productName={"Square Stainless Tubes"} />
            <ProductCard productImg={rectangleSteel} productName={"Rectangle Stainless Tube"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;