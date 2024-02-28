import React from "react";

const ShowMenuPart = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "3rem", color: "#f46000" }}>
        Our Menu.
      </h1>
      <div className="showmenu-container">
        <div className="part-one">
          <div>
            {" "}
            <a href="menu">
              <img
                src="https://i.pinimg.com/736x/46/eb/1d/46eb1da582373e59ed7b12f6667267cf.jpg"
                alt=""
                className="menu-image"
              />
            </a>
            <h4 style={{ marginTop: "4px" }}>Breakfast</h4>
          </div>
          <div>
            <a href="menu">
              <img
                src="https://i.pinimg.com/564x/5b/aa/70/5baa709cb5b905725b261c0114e4629b.jpg"
                alt=""
                className="menu-image"
              />
            </a>
            <h4 style={{ marginTop: "4px" }}>Lunch</h4>
          </div>
        </div>
        <div className="part-two">
          <div>
            <a href="menu">
              <img
                src="https://i.pinimg.com/564x/ff/e2/a6/ffe2a6b9e3f427c7e80f68f29d67aa6d.jpg"
                alt=""
                className="menu-image"
              />
            </a>
            <h4 style={{ marginTop: "4px" }}>Dinner</h4>
          </div>
          <div>
            <a href="menu">
              <img
                src="https://i.pinimg.com/564x/bf/f4/dd/bff4dd2d0afdcecfb3af567f42c42c93.jpg"
                alt=""
                className="menu-image"
              />
            </a>
            <h4 style={{ marginTop: "4px" }}>Drinks</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMenuPart;
