import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="p">
        <p>Sign up for our newsletter and get 15% off your next order</p>
      </div>
      <div className="container">
        <div>
          <h1>Zema</h1>
        </div>
        <div className="a">
          <Link to="/">Home</Link>
          <Link to="Shop">Shop</Link>
          <Link to="OurStory">Our Story</Link>
          <Link to="Contact">Contact</Link>
          <Link to="About">About</Link>
        </div>

        <div className="i">
          <div>
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <div>
            <img
              src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683cf8185d76bbe1c73ebfc_ic-user.svg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683cf818122b185ca0cd168_ic-cart.svg"
              alt=""
            />
          </div>
          <div className="men">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
