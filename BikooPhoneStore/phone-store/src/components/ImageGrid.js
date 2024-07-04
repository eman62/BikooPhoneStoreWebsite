import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import "../styles/ImageGrid.css";
const ImageGrid = () => {
  return (
    <Container
      dir="rtl"
      className="image-grid-container"
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        marginTop: "20vh",
      }}
      fluid
    >
      <Row style={{ height: "100%", margin: "0", padding: "0" }}>
        {/* First Image */}
        <Col md={4} style={{ margin: "0", padding: "0" }}>
          <div className="image-wrapper" style={{ position: "relative" }}>
            <Image
              src={image1}
              fluid
              className="grid-image"
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div className="image-overlay">
              <span style={{ fontSize: "22px" }}>
                {" "}
                خدمه مميزه لأصلاح الهاتف
              </span>
            </div>
          </div>
        </Col>
        {/* Second to Fifth Images */}
        <Col md={8} style={{ margin: "0", padding: "0" }}>
          <Row style={{ height: "50%", margin: "0", padding: "0" }}>
            <Col style={{ margin: "0", padding: "0", height: "100%" }}>
              <div className="image-wrapper" style={{ position: "relative" }}>
                <Image
                  src={image2}
                  fluid
                  className="grid-image"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay">
                  <span style={{ fontSize: "22px" }}> شحن جميع الفواتير</span>
                </div>
              </div>
            </Col>
            <Col style={{ margin: "0", padding: "0", height: "100%" }}>
              <div className="image-wrapper" style={{ position: "relative" }}>
                <Image
                  src={image3}
                  fluid
                  className="grid-image"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay">
                  <span style={{ fontSize: "22px" }}>
                    {" "}
                    كل أكسسوارات الهاتف متوفره
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ height: "50%", margin: "0", padding: "0" }}>
            <Col style={{ margin: "0", padding: "0", height: "100%" }}>
              <div className="image-wrapper" style={{ position: "relative" }}>
                <Image
                  src={image4}
                  fluid
                  className="grid-image"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay">
                  <span style={{ fontSize: "22px" }}>
                    {" "}
                    أحدث الهواتف بسعر مميز
                  </span>
                </div>
              </div>
            </Col>
            <Col style={{ margin: "0", padding: "0", height: "100%" }}>
              <div className="image-wrapper" style={{ position: "relative" }}>
                <Image
                  src={image5}
                  fluid
                  className="grid-image"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay">
                  <span style={{ fontSize: "22px" }}>
                    {" "}
                    أسعار منافسه وجوده عاليه
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGrid;
