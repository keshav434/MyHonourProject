import React, { useContext } from "react";
import "./count.css";

export default function Count({ item, addToCart }) { // Receive the addToCart function from props
  const [countID, setCountID] = React.useState(0);

  function itemAdd() {
    setCountID(oldCount => oldCount + 1);
    addToCart(item); // Use the addToCart function to add the item
  }

  function itemSub() {
    if (countID > 0) {
      setCountID(oldCount => oldCount - 1);
    }
  }

  return (
    <div className="counter">
      <button className="counter-button minus" onClick={itemSub}>–</button>
      <div className="counter-display">
        <h1 className="counter-number">{countID}</h1>
      </div>
      <button className="counter-button add" onClick={itemAdd}>+</button>
    </div>
  );
}



