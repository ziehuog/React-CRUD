import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Users from "./data/users/Users";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="">
          
            logo
            {/* <img src="../../public/logo.png" style={{width: "200px", height:"80px"}} alt="" /> */}
        </div>
        <ul>
          <li>
            <Link to="/"> Users</Link>
          </li>
          <li>
            <Link to="/checkout"> Checkout</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default Navbar;
