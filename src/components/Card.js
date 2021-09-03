import React from "react";
import "../css/card.css";
function Card({ image, title, price, category, id }) {
  return (
    <div className="card">
      <div className="card__imageContainer">
        <img src={image} alt="Product image" className="card__image" />
      </div>
      <div className="card__detailsContainer">
        <p className="card__title">{title}</p>
        <p className="card__price">$ {price}</p>
        <p className="card__category">{category}</p>
      </div>
    </div>
  );
}

export default Card;
