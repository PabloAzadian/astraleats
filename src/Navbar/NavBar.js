import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import "./NavBar.css";

function NavBar() {
  return (
<<<<<<< HEAD
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1>AE</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
=======
    <>
      <Navbar expand="lg"  className="">
        <Container>
          <Navbar.Brand href="#home">
           <h1>AE</h1>
            {/* Cafe Bohnenfeld */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link onClick={() => setScene("Home")}href="#home">HOME</Nav.Link>
                <Nav.Link onClick={() => setScene("Menu")}href="#link">MENU</Nav.Link>
                <Nav.Link onClick={() => setScene("AboutUs")}href="#aboutus">About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
>>>>>>> 9aa6c990ebcc48314762507fe4e0aa78b6a0f122
  );
}

export default NavBar;
