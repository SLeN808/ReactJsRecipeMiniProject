import React from "react";
import "./Recipie.css";

function Recipie(props) {
  return (
    <div className="card">
      <img className="card__image" src={props.image} alt={props.tile} />
      <h1 className="card__title">{props.title}</h1>
      <p className="card_desc">
        <span>calories:</span>
        {Math.round(props.calories)}
      </p>
      <button className="card__btn">
        <span className="btn_text">Get Recipe.</span>
      </button>
    </div>
  );
}

export default Recipie;
