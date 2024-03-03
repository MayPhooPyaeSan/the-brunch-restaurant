import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import foodbanner from "../assets/foodbanner.jpg";
import foodbanner2 from "../assets/foodbanner2.jpg";
import foodbanner3 from "../assets/foodbanner3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="full-screen-carousel"
    >
      <Carousel.Item>
        <img src={foodbanner} className="d-block w-100" alt="First slide" />
        <Carousel.Caption className="carousel-caption-left">
          <h3>Welcome To The "The Brunch"".</h3>
          <p>Best restaurant in downtown.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foodbanner2} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption className="carousel-caption-left">
          <h3>Welcome To The "The Brunch"".</h3>
          <p>Best restaurant in downtown.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foodbanner3} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption className="carousel-caption-left">
          <h3>Welcome To The "The Brunch"".</h3>
          <p>Best restaurant in downtown.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
