import React from "react";
import { Container } from "./home.styles";
import demoVideo from "../../assets/videos/demo-vdo.mp4";

const Home = () => {
  return (
    <Container>
      {/* SLIDER CONTAINER */}
      <div className="slider-container">
        <video style={{ width: "100%", height: "80%" }} src={demoVideo} autoPlay muted loop />
      </div>
    </Container>
  );
};

export default Home;