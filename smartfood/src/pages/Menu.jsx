import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../components/Restuarantdata"
import "../pages/cssfile/Menu.css"
import Count from "../components/count"
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/footer";
const Menu = () => {
  const { id } = useParams(); 
  const restID = data.productData.find(item => item.id === parseInt(id));

  const Categorymenu = restID.menu.reduce((aco, item) => {
    if (!aco[item.category]) {aco[item.category] = [];}
    aco[item.category].push(item);
    return aco;
  }, {});

  
  return (
    <div>
      <Link to="/about" className='menu-back'>Back</Link>
        <div className='menu-info-div'>
            <div className='image-menus-item'>
            <img src={restID.img} className='image-menu'/>
            </div>

              <div className='menu-class-info'>
            <p className='name-menu'> {restID.name}</p>
            <p className='name-menu-info'> Rating : {restID.Rating}/5</p>
            <p className='name-menu-info'> Distance : {restID.distance} mile</p>

            <p className='name-menu-info'> Delivery time : {restID.time}</p>
            <p className='name-menu-info'> Delivery total fee: £{restID.fee}</p>
            <p className='name-menu-info'> Hygiene rate : {restID.Hygiene}/5</p>
            </div> 
        </div>
   
        <ul>
        {Object.entries(Categorymenu).map(([category, items]) => (
          <div className='main-menudiv'>
            <h3 className='cat-type'>{category}</h3>
               {items.map(item => (
                 <div className='menu-div'>
                 <div className='item-div'>
                  <p className='item-mneuname'>{item.itemNamelog}</p>
                  <p className='item-desc'>{item.description}</p>
                 </div>
                 <div className='price-div'>
                  <p className='menu-prices'>£{item.price}</p>
                </div>
                <div>
                  <Count />
                </div>  
              </div>
            ))}
          </div>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};


export default Menu;