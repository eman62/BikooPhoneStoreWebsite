import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import laserMachineImage from "../assets/laserMachineImage.webp";
import skinImage1 from "../assets/skinImage1.jfif";
import skinImage2 from "../assets/skinImage2.jfif";
import skinImage3 from "../assets/skinImage3.jfif";
import skinImage4 from "../assets/skinImage4.jfif";
import skinImage5 from "../assets/skinImage5.jfif";
import skinImage6 from "../assets/skinImage6.jfif";
import skinImage7 from "../assets/skinImage7.jfif";

import "../styles/SkinProtection.css";

const SkinProtection = () => {
  return (
    <Container className="skin-protection-container">
      <Row>
        {/* Left side with image */}
        <Col md={6} className="image-col">
          <Image src={laserMachineImage} fluid className="machine-image" />
        </Col>
        <Col md={6} style={{ display: "flex", alignItems: "center" }}>
          <div className="image-description">
            <h2 style={{ marginTop: "5vh" }}>
              {" "}
              ماكينه ليزر لعمل جميع أنواع الأسكرينات{" "}
            </h2>
            <p>
              طبعاً سمعتو عن الاسكين وقد ايه هو مهم لحماية جهازك من الخدوش اللي
              ممكن يتعرضلها او الخدوش اللي بيسببها الكوفر في ضهر الجهاز واللي
              لسه مسمعش عن الاسكين دا بيبقي عباره عن جلد حرارى بيغطي الجهاز 360
              درجه (ضهر وجوانب وكاميرا) بأشكال مختلفه احنا مبنعملش اسكين
              للموبايلات بس لا احنا كمان بنعمل اسكين لاب توب و والتابلت
              والايربودز واجهزة البلايستيشن
            </p>
          </div>
        </Col>
      </Row>
      {/* Right side with slider */}
      <Row dir="rtl">
        <Col md={6} className="slider-col">
          <Carousel>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage4}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage5}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage6}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "100vh" }}>
              <img
                className="d-block w-100 slider-image"
                src={skinImage7}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          md={6}
          className="slider-col"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="image-description">
            <h2>
              {" "}
              اللي بيميز الأسكين في{" "}
              <span style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                {" "}
                Bikoo store
              </span>
            </h2>
            <p>
              احنا اللي بنعمل المقاسات للاجهزه دي بأدينا علي برامج رسم هندسي
              يعني بالميللي بالنسبه للاشكال متوفر عندنا تشكيل كبير من خامات 3M -
              Daqqin وخامات كوري او بنطبعلك مخصوص الشكل اللي يعجبك وعندنا اسكين
              شفاف كمان ومتاح طباعه صور علي الـcover -ومنسناش اخواتنا بتوع شاشات
              الايدج احنا حلينا لك مشكلة الاسكرينات وجبنالك احسن خامه في السوق
              حاليا مخصوص للايدج (Hydrogel screen) وموجود منها ضد البصمه و
              privacy وكلير بالمقاس اللي انت عايزه ولكل الانواع
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkinProtection;
