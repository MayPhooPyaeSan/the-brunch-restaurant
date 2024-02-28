import React from "react";
import Dots from "./dots";

const About = () => {
  return (
    <div>
      <div className="about-part">
        <div className="about-content">
          <h1>Our Story.</h1>
          <p style={{ marginTop: "2rem" }}>
            "Our menu features a delicious array of dishes, carefully crafted to
            satisfy every craving. From hearty breakfast options to
            mouthwatering main courses and delightful desserts, we've got you
            covered. Explore our menu and indulge in a culinary journey that
            promises to delight your taste buds. Whether you're craving comfort
            food or seeking a culinary adventure, our menu has something for
            everyone. Order now and treat yourself to a delightful dining
            experience delivered right to your doorstep."
          </p>
          <p>
            To those who have been with us on this journey, we're thrilled to
            have you as part of our food-loving family. And to those who have
            yet to discover us, we can't wait to serve you a taste of home,
            delivered right to your doorstep. Join us and experience a new way
            to enjoy your favorite flavors, wherever you are.
          </p>
          <a href="menu">
            <button className="button">
              <span className="button-content">Our Menus </span>
            </button>
          </a>
        </div>
        <div className="about-image">
          <img
            src="https://i.pinimg.com/564x/7f/26/44/7f26447a92fbe5e521b2e7d805bb7b35.jpg"
            alt=""
          />
        </div>
      </div>
      <Dots />
    </div>
  );
};

export default About;
