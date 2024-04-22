import React from "react";
import Footer from "../components/Footer/footer";
import ImageSlider from "../components/ImageSlider";
import Bowl from "../images/cropped-bowl.png";
import wing from "../images/cropped-chicken.png";
import Sandwich from "../images/cropped-sandwich-576531_640 1.png";
import burger from "../images/cropped-hamburger-31775_640 1.png"
import Icecream from "../images/cropped-ice-cream-2109460_640 1.png";
import Pizza from "../images/cropped-pizza-306495_640 1.png";
import Sushi from "../images/cropped-sushi-4683661_640 1.png";
import Healthy from "../images/sandwich-311262_640 1.png";
import Chicken from "../images/cropped-chicken.png";
import icon from "../images/Male Thinking.png";
import "../pages/cssfile/menupage.css";
import  data from "../components/Restuarantdata";
import Restuarant from "../components/Restuarant";
import Header from "../components/Layout/Header";
import { Link } from 'react-router-dom';



const MenuPage = () => {
        const dish = [
          { src: Pizza, alt: 'Pizza', text: 'Pizza' },
          { src: burger, alt: 'Hamburger', text: 'Burger'  },
          { src: Sushi, alt: 'Sushi', text: 'Sushi'  },
          { src: wing, alt: 'wing', text: 'Wing'  },
          { src: Bowl, alt: 'Vegan', text: 'Vegan'  },
          { src: Chicken, alt: 'Chicken', text: 'Chicken'  },
          { src: Sandwich, alt: 'Sandwich', text: 'Sandwich'  },
          { src: Icecream, alt: 'Icecream', text: 'Ice Cream'  },
          { src: Healthy, alt: 'Healthy', text: 'Healthy'  },
        ];
    return(
        <div>
            <Header></Header>
            
            <h1 className="slider-title">What's on your mind?</h1>
            <ImageSlider images={dish} />
            <div className="filter-container">
                <p>Filter</p>
                <button className="btn">Offers</button>
                <button className="btn">Free Delivery</button>
                <button className="btn">Rating: 4.0+</button>
                <button className="btn">Hygiene rating: 3+</button>
                <select className="btn">
                    <option value="">Cuisines</option>
                    <option value="italian">Italian</option>
                    <option value="chinese">Chinese</option>
                    <option value="indian">Indian</option>
                    <option value="mexican">Mexican</option>
                    <option value="thai">Thai</option>
                    <option value="greek">Greek</option>
                    <option value="American">American</option>       
                </select>
                <select className="btn">
                    <option>Sort</option>
                    <option>Recommended</option>
                    <option>Rating</option>
                    <option>Delivery time</option>        
                </select>
            </div>
            <div className="container-bite">
                <div className="icon-img">
                    <img src={icon} alt="icon" className="icon-bite"></img>
                </div>
            <div className="info-bite">
                <div><h1>Do not know what to order then why not just try Moody Bite ?</h1></div>
                <div><p> Answer few questions which will help us to tell you what is best for you today</p></div>
                <div className="info-render">
                    <div><p>Assessment time estimated : 3 - 4 mins</p></div>
                    <div className="button-containerbite"><Link to="/mood" className='explore-button'>Explore</Link></div>
                </div>
            </div>
            </div>
            <Restuarant productData={data.productData}/>
            
            <Footer/>
        </div>
    
)}

export default MenuPage;