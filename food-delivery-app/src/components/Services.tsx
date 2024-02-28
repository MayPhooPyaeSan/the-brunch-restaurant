import React from "react";
import foodgif from "../assets/burger.gif";
import audiogif from "../assets/audio.gif";
import deliverygif from "../assets/scooter.gif";

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
          }}
        >
          <img src={foodgif} alt="" className="gif-img" />
          <p>Culinary Delights</p>
        </div>
        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
          }}
        >
          <img src={audiogif} alt="" className="gif-img" />
          <p>Customer Care Commitment</p>
        </div>

        <div
          style={{
            background: "#f46000",
            padding: "20px 40px",
            maxWidth: "400px",
          }}
        >
          <img src={deliverygif} alt="" className="gif-img" />
          <p>Express Delivery Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
