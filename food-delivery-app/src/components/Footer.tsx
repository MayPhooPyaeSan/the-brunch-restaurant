import React from "react";

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <div>
        <h4 style={{ textTransform: "uppercase", marginBottom: "1rem" }}>
          The Brunch
        </h4>
      </div>
      <div>
        <h2 style={{ textTransform: "uppercase", marginBottom: "1rem" }}>
          Navigate
        </h2>
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <h6>Home</h6>
        </a>
        <a href="menu" style={{ textDecoration: "none", color: "white" }}>
          <h6>Menu</h6>
        </a>
        <a href="order" style={{ textDecoration: "none", color: "white" }}>
          <h6>Order</h6>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <h6>Contact</h6>
        </a>
      </div>
      <div>
        <h4 style={{ textTransform: "uppercase", marginBottom: "1rem" }}>
          Location
        </h4>
        <h6>31 street | 32 street</h6>
        <h6>Chan Aye Thar Zan, Mandalay</h6>
        <h6>09-12345678</h6>
      </div>
      <div>
        <h4 style={{ textTransform: "uppercase", marginBottom: "1rem" }}>
          Hours
        </h4>
        <h6>Mon-Fri 7am - 8pm</h6>
        <h6>Sat-Sun 9am = 4pm</h6>
      </div>
    </div>
  );
};

export default Footer;
