import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Layout/Header";
import "./cssfile/home.css";
import image1 from "../images/Group 140.png";
import image2 from "../images/Group 141.png";
import image3 from "../images/Group 142.png";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="hero-container">
        <h2 className="hero-title">Mood Eat</h2>
        <h2 className="hero-subtitle">
          Get the best food and drink at your door now
        </h2>
      </div>
      <div className="options-container">
        <div className="option-card">
          <img src={image1} alt="Select Restaurant" className="option-image" />
          <div className="option-overlay">
            <p className="option-title">Select your Restaurant</p>
            <p>
              Join MOOD EAT to explore and find the best restaurant for you
              through our personalized mood assessment test
            </p>
          </div>
        </div>
        <div className="option-card">
          <img src={image2} alt="Get Food" className="option-image" />
          <div className="option-overlay">
            <p className="option-title">Get your food</p>
            <p>Get your preferred food cooked and packed from the restaurant</p>
          </div>
        </div>
        <div className="option-card">
          <img src={image3} alt="Deliver Food" className="option-image" />
          <div className="option-overlay">
            <p className="option-title">Deliver food at your doorstep</p>
            <p>Get your food safely to your doorstep</p>
          </div>
        </div>
      </div>
      <div className="promo-section">
        <h1 className="promo-title">Get Up to 10% on Food</h1>
        <p className="promo-subtitle">
          Need a midweek pick-me-up, a break from cooking for the family, or
          just fancy your favourite restaurant?
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
