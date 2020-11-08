import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Rating from "./Rating";

function ProductDetails(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return (
      <div className="container text-center ">
        <h3>Sorry Product Not Found</h3>
      </div>
    );
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-5 col-sm-6">
          <div className="product_img">
            <img className="image-fluid" src={product.image} alt="product" />
          </div>
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <div className="product_info">
            <h2 className="product_name">{product.name}</h2>
            <Rating rating={4} numReviews={product.numReviews} />
            <p className="product_price">Price: {product.price}$</p>
            <p className="product_price">Description: {product.description}</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6">
          <div className="product_details_cart">
            <div className="card_product_price">
              <h5>Price:</h5>
              <p>${product.price}</p>
            </div>
            <div className="card_product_status">
              <h5>Status</h5>
              <div>
                {product.countInStock > 0 ? (
                  <span className="success">In Stock</span>
                ) : (
                  <span className="error">Unavailable</span>
                )}
              </div>
            </div>
            <button className="btn btn-primary btn_addToCart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Link className="btn btn-secondary btn-lg mt-4" to="/">
        Back To Products
      </Link>
    </div>
  );
}

export default ProductDetails;
