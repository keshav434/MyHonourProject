import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from "../components/Restuarantdata";
import "../pages/cssfile/Menu.css";
import Count from "../components/count";
import Footer from "../components/Footer/footer";
import { CartContext } from "../contexts/CardContext";

const Menu = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Ensure addToCart is obtained correctly

  const [showNotification, setShowNotification] = useState(false);

  const restID = data.productData.find(item => item.id === parseInt(id));

  if (!restID) {
    return <div>Restaurant not found</div>;
  }

  const Categorymenu = restID.menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item);
    if (addToCart) {
      addToCart(item);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      console.error('addToCart function is not available');
    }
  };

  return (
    <div className='menu-container'>
      <Link to="/about" className='menu-back'>← Back to Restaurants</Link>

      {showNotification && (
        <div className='notification'>
          Item added to cart! <Link to="/cart" className='view-cart-link'>View Cart</Link>
        </div>
      )}

      <div className='menu-info'>
        <div className='menu-header'>
          <img src={restID.img} className='menu-image' alt={`${restID.name}`} />
          <div className='menu-details'>
            <h1 className='menu-name'>{restID.name}</h1>
            <p className='menu-detail'>Rating: {restID.Rating}/5</p>
            <p className='menu-detail'>Distance: {restID.distance} miles</p>
            <p className='menu-detail'>Delivery time: {restID.time}</p>
            <p className='menu-detail'>Delivery fee: £{restID.fee}</p>
            <p className='menu-detail'>Hygiene rating: {restID.Hygiene}/5</p>
          </div>
        </div>
      </div>

      <div className='menu-categories'>
        {Object.entries(Categorymenu).map(([category, items]) => (
          <div key={category} className='category-section'>
            <h3 className='category-title'>{category}</h3>
            {items.map(item => (
              <div key={item.menuid} className='menu-item'>
                <div className='item-details'>
                  <p className='item-name'>{item.itemNamelog}</p>
                  <p className='item-description'>{item.description}</p>
                </div>
                <div className='item-actions'>
                  <p className='item-price'>£{item.price}</p>
                  <Count item={item} onAdd={() => handleAddToCart(item)} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
