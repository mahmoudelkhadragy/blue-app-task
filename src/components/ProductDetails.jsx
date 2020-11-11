import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productsActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Rating from "./Rating";

function ProductDetails(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const ProductDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = ProductDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className="container ">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-5 col-sm-6">
              <div className="product_details_img">
                <img
                  className="image-fluid"
                  src={product.image}
                  alt="product"
                />
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <div className="product_details_info">
                <h2 className="product_details_name">{product.name}</h2>
                <Rating rating={4} numReviews={product.numReviews} />
                <p className="product_price">
                  <span>Price:</span> {product.price}$
                </p>
                <p className="product_price">
                  <span>Description:</span> {product.description}
                </p>
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
      )}
    </div>
  );
}

export default ProductDetails;
