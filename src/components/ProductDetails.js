import React, { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext";
import { getProduct } from "./../services/getProduct";
import Button from "./Button";
import PriceTag from "./PriceTag";
import "../css/productDetails.css";

function ProductDetails({ match }) {
  const [product, setProduct] = useState([]);

  const { cartCount, setCartCount } = useContext(CartContext);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      const { data } = await getProduct(match.params.id);
      setProduct(data);
    } catch (error) {
      console.log("Error in product deatils", error);
    }
  };

  return (
    <div className="details">
      <div className="details__imageContainer">
        <img
          src={product.image}
          alt="Product image"
          className="details__image"
        />
      </div>
      <div className="details__and">AND</div>
      <div className="deatils__detailsContainer">
        <p className="deatils__title">{product.title}</p>

        <PriceTag price={product.price} />
        <div className="details__categoryContainer">
          <p className="details__category">{product.category}</p>
        </div>
        <p className="details__description">{product.description}</p>
        <Button
          title="Add to Cart"
          onClick={() => setCartCount(cartCount + 1)}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
