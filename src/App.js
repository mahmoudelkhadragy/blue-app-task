import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route path="/product/:id" component={ProductDetails} exact></Route>
        <Route path="/" component={Products} exact></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
