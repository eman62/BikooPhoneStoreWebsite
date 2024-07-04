import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import backgroundImage from "../assets/header.webp";
import "../styles/PowerBank.css";

const Earphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.name === "سماعه بسلك"
  );

  return (
    <div>
      <Container fluid className="p-0 position-relative">
        {/* Circular header */}
        <div className="circular-header">
          <h1 className="bg-image-title" style={{ margin: "50px" }}>
            {" "}
            سماعه
          </h1>
        </div>
        <div
          className="bg-image-container"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </Container>
      <Container className="mt-4">
        <Row style={{ direction: "rtl", marginTop: "10vh" }}>
          {filteredProducts.map((product) => (
            <Col
              key={product._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ marginBottom: "10vh" }}
            >
              <Card className="mb-3 product-card h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="card-img"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ textAlign: "center" }}>
                      {product.description}
                    </Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                      {product.price} جنيه
                    </Card.Text>
                  </div>
                  <div className="mt-auto"></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Earphone;
