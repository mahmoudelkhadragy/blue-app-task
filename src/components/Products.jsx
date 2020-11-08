import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

toast.configure();

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        toast.error("Something went Wrong!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      <div className="container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
