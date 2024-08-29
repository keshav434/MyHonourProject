import React, { useState } from "react";
import Footer from "../components/Footer/footer";
import ImageSlider from "../components/ImageSlider";
import Bowl from "../images/cropped-bowl.png";
import Wing from "../images/cropped-chicken.png";
import Sandwich from "../images/cropped-sandwich-576531_640 1.png";
import Burger from "../images/cropped-hamburger-31775_640 1.png";
import Icecream from "../images/cropped-ice-cream-2109460_640 1.png";
import Pizza from "../images/cropped-pizza-306495_640 1.png";
import Sushi from "../images/cropped-sushi-4683661_640 1.png";
import Healthy from "../images/sandwich-311262_640 1.png";
import Chicken from "../images/cropped-chicken.png";
import "../pages/cssfile/menupage.css";
import data from "../components/Restuarantdata";
import Restuarant from "../components/Restuarant";
import Header from "../components/Layout/Header";

const MenuPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const dishes = [
        { src: Pizza, alt: 'Pizza', text: 'Pizza' },
        { src: Burger, alt: 'Hamburger', text: 'Burger' },
        { src: Sushi, alt: 'Sushi', text: 'Sushi' },
        { src: Wing, alt: 'Chicken Wings', text: 'Wings' },
        { src: Bowl, alt: 'Vegan', text: 'Vegan' },
        { src: Chicken, alt: 'Chicken', text: 'Chicken' },
        { src: Sandwich, alt: 'Sandwich', text: 'Sandwich' },
        { src: Icecream, alt: 'Ice Cream', text: 'Ice Cream' },
        { src: Healthy, alt: 'Healthy', text: 'Healthy' },
    ];

    return (
        <div className="menu-page">
            <Header />

            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for dishes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <h1 className="slider-title">What's on Your Mind?</h1>
            <ImageSlider images={dishes} />

            <div className="filter-container">
                <p className="filter-title">Filter</p>
                <button className="btn">Offers</button>
                <button className="btn">Free Delivery</button>
                <button className="btn">Rating: 4.0+</button>
                <button className="btn">Hygiene Rating: 3+</button>
                <select className="btn">
                    <option value="">Cuisines</option>
                    <option value="italian">Italian</option>
                    <option value="chinese">Chinese</option>
                    <option value="indian">Indian</option>
                    <option value="mexican">Mexican</option>
                    <option value="thai">Thai</option>
                    <option value="greek">Greek</option>
                    <option value="american">American</option>
                </select>
                <select className="btn">
                    <option>Sort</option>
                    <option>Recommended</option>
                    <option>Rating</option>
                    <option>Delivery Time</option>
                </select>
            </div>

            <Restuarant productData={data.productData} />

            <Footer />
        </div>
    );
};

export default MenuPage;
