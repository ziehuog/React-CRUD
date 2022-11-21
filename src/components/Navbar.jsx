import { Container } from "@mui/material";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Home from "./data/Home";
import Users from "./data/users/Users";
import "./Navbar.css";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <div className="f-screen">
      <Container fixed>
        <div className="navbar">
          <div className="logo">
            Logo
          </div>
          <ul>
          <li>
              <NavLink
                className="menu-item"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-item"
                to="/users"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                className="menu-item"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <Breadcrumbs separator={<b> / </b>} item={NavLink} finalItem={"b"} /> */}
        {/* <Breadcrumbs
          separator={<b> / </b>}
          item={NavLink}
          finalItem={'b'}
          finalProps={{
            style: {color: 'red'}
          }}
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </div>
  );
}

export default Navbar;
