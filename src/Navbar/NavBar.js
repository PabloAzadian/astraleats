import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./NavBar.css";
import Cart from "../images/Cart.png";
import SideCartItem from '../SideCartItem/SideCartItem';
import { useShoppingCart } from '../ShoppingCartContext';

function NavBar() {
  const [show, setShow] = useState(false);
  const { shoppingCart, setShoppingCart } = useShoppingCart();

  const removeItem = (index) => {
    const updatedCart = [...shoppingCart];
    updatedCart.splice(index, 1);
    setShoppingCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of shoppingCart) {
      totalPrice += parseFloat(item.price); // Ensure item.price is treated as a number
    }
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <div className='navbar-placeholder'></div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1>AE</h1>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <Nav className="d-lg-none">
              <Navbar.Brand onClick={() => setShow(true)}>
                <img className='m-auto' src={Cart} width={"50px"} alt="Cart" />
                {shoppingCart.length > 0 && <button onClick={() => setShow(true)} className='cart-item-quantity'>{shoppingCart.length}</button>}
              </Navbar.Brand>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            </Nav>
            <Nav className="d-none d-lg-flex">
              <Navbar.Brand onClick={() => setShow(true)}>
                <img src={Cart} width={"50px"} alt="Cart" />
                {shoppingCart.length > 0 && <button onClick={() => setShow(true)} className='cart-item-quantity'>{shoppingCart.length}</button>}
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal dialogClassName="sidebar-modal"  data-bs-theme="dark" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='overflow-scroll'>
          {shoppingCart.length > 0 ? shoppingCart.map((item, index) => (
            <SideCartItem key={index} removeItem={removeItem} item={item} index={index} />
          )) : (
            <div className='empty-cart'>
              <h3>Looks like your Cart is empty {":("}</h3>
              <button onClick={() => setShow(false)}><span>Keep Browsing</span></button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <h5>Total Price: {calculateTotalPrice()}€</h5>
          {shoppingCart.length > 0 &&
            <Link to="/Checkout">
              <button onClick={() => setShow(false)}>
                Go to Checkout
              </button>
            </Link>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
