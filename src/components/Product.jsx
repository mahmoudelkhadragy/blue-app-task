import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  const { _id, image, name, description, price, rating, numReviews } = product;
  return (
    <div className="col-12 col-md-3 col-sm-6">
      <Link className="product_link" to={`/product/${_id}`}>
        <div className="product">
          <div className="product_img">
            <img width="150" height="150" src={image} alt="product-img" />
          </div>
          <div className="product_info">
            <h3 className="product_name">{name}</h3>
            <span className="product_price">{price}$</span>
            <Rating rating={rating} numReviews={numReviews} />
            <p className="product_desc">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
