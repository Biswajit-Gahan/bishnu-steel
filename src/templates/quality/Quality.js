import React, { useEffect } from "react";
import { QualityContainer } from "./quality.styles";
import PageTitle from "../../components/page.title/PageTitle";
import localdb from "../../utils/localdb";
import observer from "../../utils/observer";

const ProductGrade = ({ type, content, dropDownContent}) => {
  return (
    <div className="product-grade-container">
      <p className="content"><strong>{type} series of stainless steel products: </strong>{content}</p>
      <p className="content-link">Click the link here to know more about the <u className="underline">{type} series of stainless steel products.</u></p>
    </div>
  );
};

const Quality = () => {
  useEffect(() => {
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <QualityContainer>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <PageTitle pageName="Product Quality" />
      </section>

      {/* GRADES SECTION */}
      <section className="grades-section">
        {/* GRADES SECTION WRAPPER */}
        <div className="grades-section-wrapper">
          {/* GRADE HEADER TITLE */}
          <h2 className="grade-header-title">Types of Stainless Steel Grades:</h2>

          {/* PRODUCT GRADE CONTAINER */}
          {
            localdb.quality.map((item, index) => (
              <ProductGrade key={index} type={item.type} content={item.content} />
            ))
          }
        </div>
      </section>
    </QualityContainer>
  );
};

export default Quality;