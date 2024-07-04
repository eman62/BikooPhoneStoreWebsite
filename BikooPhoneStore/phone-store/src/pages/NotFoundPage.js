import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center" style={{ marginTop: "30vh" }}>
        <Col md={8}>
          <h1 className="text-center">404 - Page Not Found</h1>
          <p className="text-center">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="text-center">
            <Link to="/">
              <Button variant="primary">Go to Home Page</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
