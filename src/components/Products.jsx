import React from "react";
import { data } from "../data";
import Product from "./Product";

function Products() {
  const { products } = data;
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
