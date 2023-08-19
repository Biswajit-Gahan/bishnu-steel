import React from "react";
import { GalleryContainer } from "./gallery.styles";

const Gallery = ({title, images}) => {
  return (
    <GalleryContainer>
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-content-container">
        {
          images.map((item, index) => (
            <img key={index} src={item} alt={title} className="gallery-image" />
          ))
        }
      </div>
    </GalleryContainer>
  );
};

export default Gallery;