import React from 'react';
import "../Footer/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-section'>
                    <h2>Customer Service</h2>
                    <ul>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/login">Log In</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/account">My Account</a></li>
                        <li><a href="/mobile-apps">Mobile Apps</a></li>
                        <li><a href="/redeem-giftcard">Redeem a Giftcard</a></li>
                        <li><a href="/buy-giftcard">Buy a Giftcard</a></li>
                        <li><a href="/local-legends">Local Legends</a></li>
                    </ul>
                </div>
                
                <div className='footer-section'>
                    <h2>Top Cuisines</h2>
                    <ul>
                        <li><a href="/cuisine/chinese">Chinese</a></li>
                        <li><a href="/cuisine/fish-chips">Fish & Chips</a></li>
                        <li><a href="/cuisine/indian">Indian</a></li>
                        <li><a href="/cuisine/pizza">Pizza</a></li>
                        <li><a href="/cuisine/italian">Italian</a></li>
                        <li><a href="/cuisine/kebabs">Kebabs</a></li>
                        <li><a href="/cuisine/sushi">Sushi</a></li>
                        <li><a href="/cuisine/groceries">Groceries</a></li>
                        <li><a href="/cuisines">View All Cuisines</a></li>
                    </ul>
                </div>
                
                <div className='footer-section'>
                    <h2>Popular Locations</h2>
                    <ul>
                        <li><a href="/locations/london">London</a></li>
                        <li><a href="/locations/manchester">Manchester</a></li>
                        <li><a href="/locations/birmingham">Birmingham</a></li>
                        <li><a href="/locations/leeds">Leeds</a></li>
                        <li><a href="/locations/glasgow">Glasgow</a></li>
                        <li><a href="/locations">View All Locations</a></li>
                    </ul>
                </div>
                
                <div className='footer-section'>
                    <h2>Top Brands</h2>
                    <ul>
                        <li><a href="/brands/mcdonalds">McDonald's</a></li>
                        <li><a href="/brands/kfc">KFC</a></li>
                        <li><a href="/brands/burger-king">Burger King</a></li>
                        <li><a href="/brands/dominos-pizza">Domino's Pizza</a></li>
                        <li><a href="/brands/papa-johns">Papa John's</a></li>
                        <li><a href="/brands/greggs">Greggs</a></li>
                        <li><a href="/brands/subway">Subway</a></li>
                        <li><a href="/brands/starbucks">Starbucks</a></li>
                        <li><a href="/brands/costa-coffee">Costa Coffee</a></li>
                        <li><a href="/brands">View All Brands</a></li>
                    </ul>
                </div>
                
                <div className='footer-section'>
                    <h2>Get to Know Us</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/restaurant-signup">Restaurant Sign Up</a></li>
                        <li><a href="/deliver-with-us">Deliver with Mood Eat</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/sustainability">Sustainability</a></li>
                        <li><a href="/business">Mood Eat for Business</a></li>
                        <li><a href="/bug-bounty">Bug Bounty</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Mood Eat. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;