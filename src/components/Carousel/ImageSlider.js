import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slideOne from "../../assets/image1.jpg";
import slideTwo from "../../assets/Image2.jpg";
import slideThree from "../../assets/Image3.jpg";
import nav from "bootstrap";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={slideOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Skywalker</h3>
            <p>I like the firsts. Good or bad, they're Always memorable.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slideTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Darth Vader</h3>
            <p>You can't stop change any more than you can stop the suns from setting.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slideThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>Obi-Wan Kenobi</h3>
            <p>
            Let the past die. Kill it if you have to.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Your focus determines your reality</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageSlider;
