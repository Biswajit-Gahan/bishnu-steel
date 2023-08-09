import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../templates/home/Home";
import Footer from "../components/footer/Footer";
import Product from "../templates/product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../app/app.styles.css";
import QuotationModal from "../components/modals/quotation.modal/QuotationModal";

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={< Home />} />
          <Route path="products/:productType" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;