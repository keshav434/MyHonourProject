import React from "react";
import Footer from "../components/Footer/footer";
import Layout  from "../components/Layout/Layout";
import "./cssfile/home.css";
import image1 from "../images/Group\ 140.png";
import { Link } from 'react-router-dom';
import image2 from "../images/Group\ 141.png";
import image3 from "../images/Group\ 142.png";

const Home = () => {

    return(
        <div className="MAIN">
            <Layout/>
            <div className="container">
                <div>
                    <h2 className="info-name1">MOOD EAT</h2>
                </div>
                <div>
                    <h2 className="info-name">Get the best food and drink at your door now </h2>
                </div>

            </div>
            <div className="option">
            <div className="second-panel1">
                <div className="image-class1" > 
                    <img src={image1} alt="Restaurant" />
                    <div className="overlay-text">
                        <p className="truemaster">Select your Restaurant</p>
                        <p>Join MOOD EAT to explore and find the best restaurant for you through our personalized mood assessment test</p>
                    </div>
                </div>
            </div>
            <div className="second-panel1">
                <div className="image-class1">
                    <img src={image2} alt="Restaurant" />
                    <div className="overlay-text">
                        <p className="truemaster">Get your food </p>
                        <p>Get your preferred food cooked and packed from the restaurant</p>
                    </div>
                </div>
            </div><div className="second-panel1">
                <div className="image-class1">
                    <img src={image3} alt="Restaurant" />
                    <div className="overlay-text">
                        <p className="truemaster">Deliver food at your doorstep </p>
                        <p>Get your food safely to your door step</p>
                    </div>
                </div>
            </div>
                

            </div>
            <div>
                <div className="tag-line">
                    <div>
                    <h1 className="tag-title">Get Up to 10% on Food</h1>
                </div>
                <div>
                    <p className="tag-subtitle"> Need a midweek pick-me-up, abreak from cooking for the family or just fancy your favourite restaurant?</p>
                </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home;