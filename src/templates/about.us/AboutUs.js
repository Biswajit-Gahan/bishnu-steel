import React, { useEffect } from "react";
import { AboutUsContainer } from "./about.us.styles";
import PageTitle from "../../components/page.title/PageTitle";
import AboutCompanyTag from "../../components/about.company.tag/AboutCompanyTag";
import ProductCard from "../../components/product.card/ProductCard";
import roundSteel from "../../assets/images/round-steels.jpg";
import squareSteel from "../../assets/images/square.jpg";
import rectangleSteel from "../../assets/images/rectangle-steel.jpg";
import MessageBox from "../../components/message.box/MessageBox";
import observer from "../../utils/observer";

const AboutUs = () => {
  useEffect(() => {
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <AboutUsContainer>
      {/* PAGE NAME SECTION */}
      <section className="page-name-section">
        <PageTitle pageName="About Us" />
      </section>

      {/* OUR VISION SECTION */}
      <section className="our-vision-section">
        <div className="our-vision-container">
          <h4 className="our-vision-header-text">Our Vision</h4>
          <p className="our-vision-content">
            Our vision is to establish ourselves as a leading manufacturer of stainless steel tubes, renowned for our unmatched robustness, durability, and uncompromising quality across the India.
          </p>
        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="our-mission-section">
        <div className="our-mission-container">
          <h4 className="our-mission-header-text">Our Mission</h4>
          <p className="our-mission-content">
            We aim to expand our domestic footprint across India, catering to a diverse range of markets and customers with cutting edge innovation design and finishes within next 5 years.<br /><br />
            Our mission is to solidify our position as a trusted partner and preferred supplier in the stainless steel tube industrywith  an aim to reach-out 50 Lakh Household  in next 5 Years.
          </p>
        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="our-products-section">
        <div className="our-products-container">
          <h4 className="our-products-header-text">Our Products</h4>
          <p className="our-products-content">
            Stainless steel welded tubes are available in various shapes and sizes, including rectangular, square, and circle pipes. These tubes are categorized based on their outer diameter, thickness, steel grade, specification, length, and application in home decor and furniture. Some common material grades used in these tubes include 304/304L, 316/316L, 316TI, and 202.
          </p>
          <div className="products-container">
            <ProductCard productImg={roundSteel} productName={"Round Stainless Tubes"} productType="round" />
            <ProductCard productImg={squareSteel} productName={"Square Stainless Tubes"} productType="square" />
            <ProductCard productImg={rectangleSteel} productName={"Rectangle Stainless Tube"} productType="rectangle" />
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-us-section">
        <AboutCompanyTag
          aboutCompanyContent={"Bishnu Steel is a visionary stainless steel tube manufacturing company located in Khurda,Barunai Industrial unit known for its commitment to excellence and innovation. With a daily production capacity of 10 tons, our state-of-the-art manufacturing unit is equipped with imported machinery, ensuring precision, efficiency, and high-quality output.<br/><br/>We understand the importance of design in the stainless steel tube industry. Our dedicated team work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.<br/><br/>At Bishnu Steel, we prioritize customer satisfaction and strive to build long-term partnerships. Our dedicated customer support team provides personalized assistance, technical expertise, and on-time delivery to meet the unique requirements of our clients. We believe in the power of collaboration and work closely with our customers to understand their needs and deliver tailored solutions.<br/><br/>With our commitment to design, sustainability, durability, performance, and integration with emerging technologies, Bishnu Steel will be poised to be a leading name in the stainless steel tube industry. We envision a future where our products continue to shape industries, create inspiring spaces, and contribute to a sustainable and prosperous world.<br/><br/>"}
        />
      </section>

      {/* NEED HELP SECTION */}
      <section className="need-help-section">
        <MessageBox />
      </section>
    </AboutUsContainer>
  );
};

export default AboutUs;