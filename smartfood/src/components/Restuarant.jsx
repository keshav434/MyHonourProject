import React from 'react';
import "./Restuarant.css"
import { Link } from 'react-router-dom';

const Restuarant = ({ productData }) => {
  return (
    <div className='product'>
      {productData.map(product => (
        <div>

        <div key={product.id}> 
        <Link to={`/menu/${product.id}`} className='Restuarant-btn'>
          <div className='product-info'> 
               <div>
                   <img src={product.img} alt={product.name}  className='image-rst'/>
                </div>
          <div className='product-key'>
        <div className='product-name'>
            <div>
          <h3 className='rest-name'>{product.name}</h3>
          </div>
          <div className='more-info'>
          <a className='timer'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
          <path d="M3 5.5L5 3.5M21 5.5L19 3.5M9 9.5L15 15.5M15 9.5L9 15.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></a>
          <p>{product.time} </p>
          <p> {product.distance} miles</p>
          </div>

          <div className='delivery-info'>
            
            <a class= "svg1"><svg fill="#000000" height="20px" width="20px" version="1.1" id="Icons" viewBox="0 0 32 32" xmlSpace="preserve">
            <g>
	            <path d="M16,19c2.2,0,4-1.3,4-3s-1.8-3-4-3s-4,1.3-4,3S13.8,19,16,19z"/>
	        <path d="M26.5,4h-21C3.6,4,2,5.6,2,7.5S3.6,11,5.5,11H9v16c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V11h3.5c1.9,0,3.5-1.6,3.5-3.5   S28.4,4,26.5,4z M21,22.1c-2,0.4-3.5,1.9-3.9,3.9h-2.2c-0.4-2-1.9-3.5-3.9-3.9V6h10V22.1z"/>
            </g>
            </svg></a>
            <p> £{product.fee} Delivery Fee</p>
          </div>
          
          </div>
          <div className='product-information'>
          <span className='star'>★</span>
          <p className='rating-prop'>Rating: {product.Rating}</p>
          
          </div>
          </div>
          
          
        </div>
        </Link>
        </div>
        </div>
      ))}
    </div>

  );
};

export default Restuarant;