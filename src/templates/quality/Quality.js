import React, { useEffect, useState } from "react";
import { ProductGradesContainer, QualityContainer } from "./quality.styles";
import PageTitle from "../../components/page.title/PageTitle";
import localdb from "../../utils/localdb";
import observer from "../../utils/observer";
import uid from "../../utils/uid";

const Quality = () => {
  const [showGrade, setShowGrade] = useState(() => ({ g200: false, g300: false }));

  const handleShowGradeButton = (grade) => {
    grade === 200
      ? setShowGrade((prevData) => ({ ...prevData, g200: !prevData.g200 }))
      : setShowGrade((prevData) => ({ ...prevData, g300: !prevData.g300 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <h2 className="grade-header-title">Stainless Steel Grades:</h2>

          {/* PRODUCT GRADE CONTAINER */}
          {
            localdb.quality.map((item, index) => (
              <ProductGradesContainer key={uid()}>
                <div className="product-grade-container">
                  <p className="content"><strong>{item.type} series of stainless steel products: </strong>{item.content}</p>
                  <p className="content-link">Click the link here to know more about the <u className="underline" onClick={() => (handleShowGradeButton(item.type))}>{item.type} series of stainless steel products.</u></p>

                  {/* DROPDOWN CONTAINER */}
                  {
                    showGrade?.[`g${item.type}`] &&
                    <div className="drop-down-container">
                      <div className="drop-down-content" dangerouslySetInnerHTML={{ __html: item.dropDownContent }}></div>
                      <button type="button" className="close-button" onClick={() => (handleShowGradeButton(item.type))}>Close</button>
                    </div>
                  }
                </div>
              </ProductGradesContainer>
            ))
          }
        </div>
      </section>
    </QualityContainer>
  );
};

export default Quality;