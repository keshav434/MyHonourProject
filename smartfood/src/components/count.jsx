import React from "react";
import "./count.css"

export default function Count() {
    const [countID, setCountID] = React.useState(0)

  function itemAdd(){
    setCountID(oldCount => oldCount + 1)
  }
  function itemSub(){
    if (countID > 0){
        setCountID(oldCount => oldCount - 1)
        }
  }

  return(
    <div className="counter">
        <button className="Minu-item" onClick={itemSub}>–</button>
            <div className="counter-css">
                 <h1>{countID}</h1>
            </div>
        <button className="Add-item" onClick={itemAdd}>+</button>
    </div>
  )

}