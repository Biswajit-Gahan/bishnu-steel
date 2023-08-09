import React from "react";
import { Container } from "./home.styles";
import factoryVideo from "../../assets/videos/factory-video.mp4";
import AboutProduct from "../../components/about.product/AboutProduct";
import posterImage from "../../assets/images/steel-pipes.jpg"
import ProductCard from "../../components/product.card/ProductCard";
import roundSteel from "../../assets/images/round-steels.jpg";
import squareSteel from "../../assets/images/square.jpg";
import rectangleSteel from "../../assets/images/rectangle-steel.jpg";
import Brochure from "../../components/brochure/Brochure";
import AboutCompanyTag from "../../components/about.company.tag/AboutCompanyTag";
import Testimonials from "../../components/testimonials/Testimonials";
import NeedAssistance from "../../components/need.assistance/NeedAssistance";
import EventsSlider from "../../components/events.slider/EventsSlider";
import MessageBox from "../../components/message.box/MessageBox";
import steelImage from "../../assets/images/steel-pipes.jpg";

const Home = () => {
  return (
    <Container>
      {/* VIDEO CONTAINER */}
      <section className="video-container">
        {/* BRAND VIDEO */}
        <video className="brand-video" src={factoryVideo} autoPlay muted loop poster={posterImage} playsInline={true} />

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
      </section>

      {/* ABOUT STEELS */}
      <section className="about-steels-container">
        {/* ABOUT PRODUCT COMPONENT */}
        <AboutProduct
          headerText={"Stainless Steel ERW / NB Pipe"}
          aboutText={"Steel tubing can be made from various raw materials, like iron, carbon, manganese, vanadium, and zirconium. Like pipe, tubing can be produced as either seamless or welded. Seamless tubing is a solid block of steel that is rolled into a round shape and then pierced and stretched into its final length."}
          productImage={steelImage}
        />
      </section>

      {/* PRODUCT RANGE */}
      <section className="product-range-container">
        <div className="product-range-container-wrapper">
          {/* PRODUCT RANGE HEADER */}
          <div className="product-range-header">
            <h2 className="product-range-header-text">Our Products Range</h2>
            <div className="header-divider"></div>
          </div>

          {/* PRODUCT RANGE CARDS CONTAINER */}
          <div className="product-range-cards-container">
            {/* PRODUCT RANGE COMPONENT */}
            <ProductCard productImg={roundSteel} productName={"Round Stainless Tubes"} productType="round" />
            <ProductCard productImg={squareSteel} productName={"Square Stainless Tubes"} productType="square" />
            <ProductCard productImg={rectangleSteel} productName={"Rectangle Stainless Tube"} productType="rectangle" />
          </div>
        </div>
      </section>

      {/* BROCHURE SECTION */}
      <section className="brochure-container">
        {/* BROCHURE COMPONENT */}
        <Brochure />
      </section>

      {/* ABOUT COMPANY SECTION */}
      <section className="about-company-container">
        <AboutCompanyTag />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-container">
        <Testimonials />
      </section>

      {/* NEED ASSISTANCE SECTION*/}
      <section className="need-assistance-container">
        <NeedAssistance />
      </section>

      {/* EVENTS SLIDER SECTION */}
      {/* <section className="events-slider-container">
        <EventsSlider />
      </section> */}

      {/* MESSAGE BOX SECTION */}
      <section className="message-box-section">
        <MessageBox />
      </section>

    </Container>
  );
};

export default Home;