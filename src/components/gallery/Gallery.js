import React, { useEffect, useRef } from "react";
import { GalleryContainer } from "./gallery.styles";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const Gallery = ({ title, images }) => {
  const galleryWrapperRef = useRef();
  
  const clicks = useRef(0);

  const categoryLength = Math.floor(images.length / 2);

  const handleNextButton = () => {
    if (clicks.current < categoryLength) {
      const galleryWidth = (galleryWrapperRef.current.scrollWidth - galleryWrapperRef.current.getBoundingClientRect().width) / categoryLength;
      galleryWrapperRef.current.style.transform = `translateX(-${galleryWidth * ++clicks.current}px)`;
    } else {
      return;
    }
  };

  const handlePrevButton = () => {
    if (clicks.current > 0) {
      const galleryWidth = (galleryWrapperRef.current.scrollWidth - galleryWrapperRef.current.getBoundingClientRect().width) / categoryLength;
      galleryWrapperRef.current.style.transform = `translateX(-${galleryWidth * --clicks.current}px)`;
    }
  }

  return (
    <GalleryContainer>
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-content-container">
        <div className="gallery-wrapper" ref={galleryWrapperRef}>
          {
            images.map((item, index) => (
              <img key={index} src={item} alt={title} className="gallery-image" />
            ))
          }
        </div>

        {/* BUTTONS */}
        <button type="button" className="left-button" onClick={handlePrevButton} ><KeyboardArrowLeftRoundedIcon className="button-icon" /></button>
        <button type="button" className="right-button" onClick={handleNextButton}><KeyboardArrowRightRoundedIcon className="button-icon" /></button>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;