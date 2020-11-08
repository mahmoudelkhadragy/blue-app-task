import React from "react";
import { data } from "../data";

function Products() {
  const { products } = data;
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-12 col-md-3 col-sm-6">
              <div className="product">
                <div className="product_img">
                  <img src={product.image} alt="product-img" />
                </div>
                <div className="product_info">
                  <h3 className="product_name">{product.name}</h3>
                  <span className="product_price">{product.price}</span>
                  <p className="product_desc">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
