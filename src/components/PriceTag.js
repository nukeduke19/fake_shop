import React from "react";
import "../css/priceTag.css";

function PriceTag({ price }) {
  return <span class="tag">$ {price}</span>;
}

export default PriceTag;
