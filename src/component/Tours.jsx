import React, { useState } from "react";
import "./Tours.css";
export default function Tours(props) {
  const [readMore,setReadMore]= useState(false)
  function ToggleReadMore(){
    setReadMore(prev => !readMore)
  }
  return (
    <div className="section">
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="under-line"></div>
      </div>
      <div className="tours">
        {props.tours.map((t) => (
          <div key ={t.id} className="tour">
            <img src={t.image} className="image" alt="tour" />
            <div className="np">
              <div className="name">{t.name}</div>
              <div className="price">{t.price} £</div>
            </div>
            <div className="info" >{readMore?t.info:
            `${t.info.substring(0,200)}...`
            } <span onClick={ToggleReadMore}>{readMore?'Show less':'Read More'}</span>
            </div>
            <button className="btn" onClick={()=>props.removeTour(t.id)}>Not Intrested</button>
          </div>
        ))}
      </div>
    </div>
  );
}
