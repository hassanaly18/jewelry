import React from "react";
// import "../Style/Home.css";
import Hero from "../Components/Hero";
import BestSellers from "../Components/BestSellers";
import Collection from "../Components/Collection";
import Partners from "../Components/Partners";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero/>
      <BestSellers/>
      <Collection/>
      <Partners/>
      <div className="boxx">
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
