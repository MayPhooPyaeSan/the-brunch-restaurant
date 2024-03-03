import React from "react";
import foodgif from "../assets/apple-pie.gif";
import audiogif from "../assets/speech-bubble.gif";
import deliverygif from "../assets/package.gif";
import chillgif from "../assets/chili.gif";

const Services = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "3rem", color: "#f46000" }}>
        Our Services.
      </h1>
      <div className="service-container">
        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
            width: "200px",
            height: "200px",
            color: "white",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "20px",
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
          }}
        >
          <img src={foodgif} alt="" className="gif-img" />
          <p style={{ textAlign: "center" }}>Culinary Delights</p>
        </div>
        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
            width: "200px",
            height: "200px",
            color: "white",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "20px",
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
          }}
        >
          <img src={audiogif} alt="" className="gif-img" />
          <p style={{ textAlign: "center" }}>Customer Care Commitment</p>
        </div>
        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
            width: "200px",
            height: "200px",
            color: "white",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "20px",
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
          }}
        >
          <img src={chillgif} alt="" className="gif-img" />
          <p style={{ textAlign: "center" }}>Quality Ingredients</p>
        </div>
        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
            width: "200px",
            height: "200px",
            color: "white",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "20px",
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
          }}
        >
          <img src={deliverygif} alt="" className="gif-img" />
          <p style={{ textAlign: "center" }}>Express Delivery Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
