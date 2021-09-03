import React from "react";
import Card from "./Card";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

import "../css/product.css";

function Products(props) {
  const cards = useProducts();
  return (
    <div className="body">
      {cards.map((card) => (
        <Link key={card.id} to={`/products/${card.id}`} className="link">
          <Card
            image={card.image}
            title={card.title}
            price={card.price}
            category={card.category}
          />
        </Link>
      ))}
    </div>
  );
}

export default Products;
