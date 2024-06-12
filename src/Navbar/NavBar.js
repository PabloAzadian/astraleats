import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo2.png"
import  "./NavBar.css"

function NavBar( {setScene}) {
  return (
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
  );
}

export default NavBar;