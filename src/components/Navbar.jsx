import React, { Fragment } from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Elkhadragy</h3>
      </div>
      <div className="links">
        <span>Cart</span>
        <span>login</span>
      </div>
    </nav>
  );
}

export default Navbar;
