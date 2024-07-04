import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/bikoologo.png";
import backgroundImage from "../assets/footer-background.webp";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="contact-info-container" style={{ marginTop: "70vh" }}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="content">
          <img src={logo} alt="Logo" className="logo" />
          <div className="store-info">
            <h2
              style={{
                fontFamily: "cursive",
                marginBottom: "5vh",
                color: "white",
              }}
            >
              Bikoo Store
            </h2>
            <div className="phone-numbers">
              <div className="phone-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>012 8445 5519</p>
              <div className="phone-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>010 7005 7646</p>
            </div>
            <div
              className="address-icon"
              style={{ marginTop: "20px", fontSize: "20px" }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="address">
              <p style={{ marginBottom: "10vh" }}>
                Bikoo phone store المرج الجديده شارع عماد الجندى الصرف الصحى
                بجوار كافيه ع الناصيه وسنتر الراعى
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Bikoo Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
