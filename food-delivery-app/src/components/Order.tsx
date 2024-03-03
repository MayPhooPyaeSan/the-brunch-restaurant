import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Footer from "./Footer";

const Order = () => {
  return (
    <div>
      <div className="menu-nav-container" id="order">
        <div>
          <a href="/" style={{ textDecoration: "none", color: "#573d32" }}>
            <h1>Us To You</h1>
          </a>
        </div>
        <div>
          <a href="http://">
            <FaFacebookSquare fontSize={30} color="#573d32" />
          </a>

          <a href="http://">
            <FaInstagramSquare fontSize={30} color="#573d32" />
          </a>
          <a href="http://">
            <FaSquareXTwitter fontSize={30} color="#573d32" />
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
        className="address-container"
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              marginTop: "2rem",
              color: "#573d32",
            }}
          >
            31 street
          </h1>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              textDecoration: "underline",
              marginTop: "2rem",
              cursor: "pointer",
              color: "#f46000",
            }}
          >
            Delivery
          </h1>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "1rem",
              color: "#f46000",
            }}
          >
            Pick-Up
          </h1>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              marginTop: "2rem",
              color: "#573d32",
            }}
          >
            32 street
          </h1>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              textDecoration: "underline",
              marginTop: "2rem",
              cursor: "pointer",
              color: "#f46000",
            }}
          >
            Delivery
          </h1>
          <h1
            style={{
              textAlign: "center",
              fontSize: "56px",
              fontFamily: "p22-mackinac-pro",
              fontWeight: "700px",
              lineHeight: "60px",
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "1rem",
              color: "#f46000",
            }}
          >
            Pick-Up
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
