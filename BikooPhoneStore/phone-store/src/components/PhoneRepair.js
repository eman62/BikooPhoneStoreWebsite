import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import phoneRepairImage from "../assets/phoneRepairImage.png";
import "../styles/PhoneRepair.css";

const PhoneRepair = () => {
  return (
    <Container className="phone-repair-container">
      <Row style={{ marginBottom: "10vh" }}>
        <Col className="text-center">
          <h1 className="big-title">أصلاح جميع أعطال الهاتف</h1>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="text-right">
          <ul>
            <li>
              <Card>
                <Card.Body>تغيير البطارية</Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Body>إصلاح الشاشة المكسورة</Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Body>إصلاح مشاكل الشحن والبطارية</Card.Body>
              </Card>
            </li>
          </ul>
        </Col>
        <Col md={4} className="text-center">
          <Image src={phoneRepairImage} fluid className="center-image" />
        </Col>
        <Col md={4} className="text-right">
          <ul>
            <li>
              <Card>
                <Card.Body>إصلاح مشاكل الصوت والميكروفون</Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Body>تصليح مشاكل الشبكة والواي فاي</Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Body>تصليح مشاكل البرمجيات والتطبيقات</Card.Body>
              </Card>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PhoneRepair;
