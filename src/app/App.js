import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../templates/home/Home";
import Footer from "../components/footer/Footer";
import Product from "../templates/product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../templates/about.us/AboutUs";
import "../app/app.styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={< Home />} />
          <Route path="products/:productType" element={<Product />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;