import image1 from "../images/ice-cream-3611698_640 1.png"
import image2 from "../images/chinese-5233516_640 1.png"
import image3 from "../images/burger-3962997_640 1.png"
import image4 from "../images/pexels-photo-1527602 1.png"
import image5 from "../images/burger-2034433_640 1.png"
import image6 from "../images/authentic-greek-1649223_640 1.png"
import image7 from "../images/free-photo-of-burgers-and-french-fries-in-box 1.png"
import image8 from "../images/indian-food-3856050_640 1.png"
import image9 from "../images/pexels-rdne-stock-project-6412954 2.png"




const data ={
    productData:[
        {
            id: 1,
            img:image3,
            name: 'Wingology',
            Rating:4.5,
            distance:1,
            time:'30 mins',
            fee: 1,
            cuisines: "American",
            Hygiene:4.5,
            offers:true,
            mood:"add",
            menu: [
                { menuid:1, itemNamelog: 'Stacked Buffalo Burger', description:"Crispy buffalo chicken served with house mayo, red onions and shredded lettuce, served in a fresh brioche bun.", price: 9.99, category:"Burger" },
                { menuid:2, itemNamelog: 'Korean Gochujang BBQ Burger', description:"Sticky Korean Gochujang BBQ chicken, with house mayo, red onions, and shredded lettuce, served in a fresh brioche bun.", price: 9.99,category:"Burger"},
                { menuid:3, itemNamelog: '5Spice Burger', description:'Our 5 spicy chicken is served with house mayo, red onions and shredded lettuce, served in a fresh brioche bun.', price: 9.99,category:"Burger"},
                { menuid:4, itemNamelog: 'Buffalo Wings', description:'Fresh and crispy wings tossed in our tantalising buffalo sauce and finished with cilantro. A house favourite!', price: 9.99,category:"Wings"},
                { menuid:5, itemNamelog: '5Spice Wings', description:'Our fresh 5 spice blend adds a touch of spice with mouthwatering flavours, topped with spring onions, soy sauce, and chilli slices.', price: 9.99,category:"Wings"},
                { menuid:6, itemNamelog: 'Korean Gochujang BBQ Wings', description:'Sticky Korean BBQ wings topped with sesame seeds, and spring onions.', price: 9.99,category:"Wings"},
                { menuid:7, itemNamelog: 'Portobello & Halloumi Burger', description:'A seasoned and grilled portobello mushroom, served with grilled halloumi, sweet grilled peppers, caramelised onions, tomato, baby leaf salad, house mayo and spicy guacamole', price: 9.99,category:"Veggie"},
                { menuid:8, itemNamelog: 'Sharing Nachos', description:'Served with salsa, jalapenos, sour cream, spicy guacamole and melted cheese sauce.', price: 9.99,category:"Sides"},
                { menuid:9, itemNamelog: 'Messy Fries', description:'Our house fries topped with melted cheese and cajun.', price: 9.99,category:"Sides"},
                { menuid:10, itemNamelog: 'Mango Thickshake', description:'', price: 9.99,category:"Drinks"},
                { menuid:11, itemNamelog: 'Pepsi Max', description:'The original Pepsi. Robust in flavour and deeply refreshing. Delivered cold.', price: 9.99,category:"Drinks"},
                { menuid:12, itemNamelog: 'Diet Pepsi Cola Can, 330ml', description:'No sugar, no calories. Crisp in flavour and deeply refreshing. Delivered cold.', price: 9.99,category:"Drinks"},
                { menuid:13, itemNamelog: 'Buffalo Dip', price: 9.99,category:"Dips"},
                { menuid:14, itemNamelog: 'Ranch Dip', price: 9.99,category:"Dips"},
                { menuid:15, itemNamelog: 'Blue Cheese Dip', price: 9.99,category:"Dips"},

            ]
                
            
        },
        {
            id: 2,
            img:image4,
            name: 'Just Italian Taste',
            Rating:4.3,
            distance:2,
            time:'50 mins',
            fee: 3,
            cuisines: "Italian",
            Hygiene:2.5,
            offers:true,
            mood:"add",
            menu: [
                { menuid:1, itemNamelog: 'Margherita', price: 8.99, category:"Pizzas"},
                { menuid:2, itemNamelog: 'Pepperoni', price: 9.99, category:"Pizzas" },
                { menuid:3, itemNamelog: 'Spaghetti Bolognese', price: 8.99,category:"Pizzas" },
                { menuid:4, itemNamelog: 'Calzone Classico', price: 9.99 ,category:"Pizzas"},
            ]
    
        },
        {
            id: 3,
            img:image2,
            name: 'Super Wok',
            Rating:3.7,
            distance:1,
            time:'20 mins',
            fee: 1,
            cuisines: "Chinese",
            Hygiene:2.5,
            offers:false,
            mood:"add",
            menu: [
                { menuid:1, itemNamelog: 'Margherita', price: 8.99 },
                { menuid:2, itemNamelog: 'Pepperoni', price: 9.99 },
                { menuid:3, itemNamelog: 'Spaghetti Bolognese', price: 8.99 },
                { menuid:4, itemNamelog: 'Calzone Classico', price: 9.99 },
            ]
            
        },
        {
            id: 4,
            img:image1,
            name: 'Star Desserts',
            Rating:4.5,
            distance:1.6,
            time:'30 mins',
            fee: 1,
            cuisines: "American",
            Hygiene:4.5,
            offers:false,
            mood:"add",
        },
        {
            id: 5,
            img:image5,
            name: 'Papa John Pizza',
            Rating:2.5,
            distance:3,
            time:'52 mins',
            fee: 1,
            cuisines: "American",
            Hygiene:3.5,
            offers:true,
            mood:"add",
        },
        {
            id: 6,
            img:image6,
            name: 'Greek Halal Gyros',
            Rating:3.4,
            distance:2.6,
            time:'54 mins',
            fee: 1,
            cuisines: "Greek",
            Hygiene:4.5,
            offers:false,
            mood:"add",
        },
        {
            id: 7,
            img:image7,
            name: 'Happy Burger Box',
            Rating:4.0,
            distance:1.1,
            time:'30 mins',
            fee: 2,
            cuisines: "American",
            Hygiene:3.5,
            offers:true,
            mood:"add",
        },
        {
            id: 8,
            img:image8,
            name: 'Indian Tiffins',
            Rating:4.2,
            distance:2.6,
            time:'45 mins',
            fee: 2,
            cuisines: "Indian",
            Hygiene:2.5,
            offers:true,
            mood:"add",
        },
        {
            id: 9,
            img:image9,
            name: 'Bagel & Shake',
            Rating:3.6,
            distance:0.6,
            time:'20 mins',
            fee: 3,
            cuisines: "American",
            Hygiene:3.5,
            offers:false,
            mood:"add",
        },

    ],

};

export default data;