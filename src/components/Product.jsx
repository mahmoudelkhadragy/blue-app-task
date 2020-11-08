import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  const { image, name, description, price, rating, numReviews } = product;
  return (
    <div className="col-12 col-md-3 col-sm-6">
      <div className="product">
        <div className="product_img">
          <img src={image} alt="product-img" />
        </div>
        <div className="product_info">
          <h3 className="product_name">{name}</h3>
          <span className="product_price">{price}$</span>
          <Rating rating={rating} numReviews={numReviews} />
          <p className="product_desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
