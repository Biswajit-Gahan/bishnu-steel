import React, { lazy, Suspense} from "react";
import Navbar from "../components/navbar/Navbar";
// import Home from "../templates/home/Home";
import Footer from "../components/footer/Footer";
// import Product from "../templates/product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AboutUs from "../templates/about.us/AboutUs";
import "../app/app.styles.css";
import LoadingScreen from "../components/loading.screen/LoadingScreen";
import TopNavigator from "../components/top.navigator/TopNavigator";
// import ContactUs from "../templates/contact.us/ContactUs";
// import EndUses from "../templates/end.uses/EndUses";
// import Quality from "../templates/quality/Quality";

const Home = lazy(() => (import("../templates/home/Home")));
const EndUses = lazy(() => (import("../templates/end.uses/EndUses")));
const ContactUs = lazy(() => (import("../templates/contact.us/ContactUs")));
const AboutUs = lazy(() => (import("../templates/about.us/AboutUs")));
const Product = lazy(() => (import("../templates/product/Product")));
const Quality = lazy(() => (import("../templates/quality/Quality")));
const News = lazy(() => (import("../templates/news/News")));

const App = () => {

  return (
    <BrowserRouter>
      <TopNavigator />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Suspense fallback={<LoadingScreen />}>< Home /></Suspense>} />
          {/* <Route path="products/:productType" element={<Product />} /> */}
          <Route path="products/:productType" element={<Suspense fallback={<LoadingScreen />}><Product /></Suspense>} />
          {/* <Route path="about-us" element={<AboutUs />} /> */}
          <Route path="about-us" element={<Suspense fallback={<LoadingScreen />}><AboutUs /></Suspense>} />
          {/* <Route path="contact-us" element={<ContactUs />} /> */}
          <Route path="contact-us" element={<Suspense fallback={<LoadingScreen />}><ContactUs /></Suspense>} />
          {/* <Route path="end-uses" element={<EndUses />} /> */}
          <Route path="end-uses" element={<Suspense fallback={<LoadingScreen />}><EndUses /></Suspense>} />
          {/* <Route path="quality" element={ <Quality />} /> */}
          <Route path="quality" element={<Suspense fallback={<LoadingScreen />}><Quality /></Suspense>} />
          <Route path="news" element={<Suspense fallback={<LoadingScreen />}><News /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<LoadingScreen />}>< Home /></Suspense>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;