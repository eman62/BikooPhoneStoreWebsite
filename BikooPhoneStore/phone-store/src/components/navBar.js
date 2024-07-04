import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import bikoologo from "../assets/bikoologo.png";
import "../styles/HomeHeader.css";
const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand
        href="#home"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        <img
          src={bikoologo} // Path to your logo image
          width="80" // Increase the size of the logo
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="navbar-title" style={{ color: "black" }}>
          Bikoo Store
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundColor: "lightgray" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links" style={{ direction: "rtl" }}>
          <Nav.Link href="/"> الرئيسيه</Nav.Link>
          <NavDropdown title="أكسسوارات" id="basic-nav-dropdown">
            <NavDropdown.Item href="/كفرات" style={{ textAlign: "center" }}>
              كفرات
            </NavDropdown.Item>
            <NavDropdown.Item href="/وصلات" style={{ textAlign: "center" }}>
              وصلات
            </NavDropdown.Item>
            <NavDropdown.Item href="/شواحن" style={{ textAlign: "center" }}>
              شواحن
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="سماعات" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="/سماعه بسلك"
              style={{ textAlign: "center" }}
            >
              سماعه
            </NavDropdown.Item>
            <NavDropdown.Item href="/أيربودز" style={{ textAlign: "center" }}>
              أيربودز
            </NavDropdown.Item>
            <NavDropdown.Item href="/سبيكر" style={{ textAlign: "center" }}>
              سبيكر
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/ساعه سمارت">ساعة سمارت</Nav.Link>

          <Nav.Link href="/باور بانك">باور بانك</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
