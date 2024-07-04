import React from "react";
import { Carousel } from "react-bootstrap";

import header from "../assets/header.webp";
import header2 from "../assets/header2.webp";
import "../styles/HomeHeader.css"; // Import custom CSS for additional styling

const HomeHeader = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Slider */}
      <div className="slider-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={header} // Path to your first slider image
              alt="First slide"
              style={{ maxHeight: "80vh" }}
            />
            <Carousel.Caption className="slider-caption">
              <h3 style={{ fontFamily: "system-ui", marginBottom: "2vh" }}>
                {" "}
                Bikoo Store
              </h3>
              <p style={{ color: "lightgray" }}>لجميع أكسسوارات الهاتف</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={header2} // Path to your second slider image
              alt="Second slide"
              style={{ maxHeight: "80vh" }}
            />
            <Carousel.Caption className="slider-caption">
              <h3>Bikoo Store</h3>
              <p style={{ color: "lightgray" }}>
                {" "}
                لجميع خدمات الهاتف المحمول وأسكينات الحمايه
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeHeader;
