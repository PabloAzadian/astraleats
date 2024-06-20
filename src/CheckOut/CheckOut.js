import React, { useState } from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './CheckOut.css';

function simulatePayment() {
  const minProcessingTime = 2000; // 2 seconds
  const maxProcessingTime = 7000; // 7 seconds
  const randomProcessingTime =
    Math.floor(Math.random() * (maxProcessingTime - minProcessingTime + 1)) + minProcessingTime;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(); // Simulate payment completion
    }, randomProcessingTime);
  });
}

function CheckOut() {
  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const [validatedAddress, setValidatedAddress] = useState(false);
  const [validatedPayment, setValidatedPayment] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoFailed, setPromoFailed] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState([
    { name: 'Spaceship Delivery (30 min)', cost: 5.00 },
    { name: 'Portal Delivery (instant)', cost: 15.00 }, // Default cost for Portal Delivery
  ]);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(deliveryOptions[0]);
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddressSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setShowPaymentOptions(true);
    }
    setValidatedAddress(true);
  };

  const handlePaymentSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
    

      setShowSpinner(true); // Show loading spinner
      await simulatePayment(); // Simulate payment processing time
      setShowSpinner(false); // Hide loading spinner

      setShowPayment(true);
    } else {
      setValidatedPayment(true);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'portal2024') {
      setPromoApplied(true);
      setPromoFailed(false)
    } else {
      setPromoFailed(true)
      setPromoApplied(false);
    }
  };

  const removeItem = index => {
    const updatedCart = [...shoppingCart];
    updatedCart.splice(index, 1);
    setShoppingCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of shoppingCart) {
      totalPrice += parseFloat(item.price); // Ensure item.price is treated as a number
    }
    // Add selected delivery option cost to the total price
    if (promoApplied & selectedDeliveryOption.name =="Portal Delivery (instant)"){
      totalPrice -= 15
    }
    totalPrice += selectedDeliveryOption.cost;
    return totalPrice.toFixed(2);
  };

  const handleClosePaymentModal = () => {
    setShowPayment(false);
    setShoppingCart([]); 
  };

  return (
    <div className='background-container'>
      <div className='checkout-container container'>
        <h1 className='checkout-title'>Check Out</h1>
        {shoppingCart.length > 0 ? (
          <div className='form-container'>
            <div>
              <h2 className='form-title'>Delivery Address</h2>
              <Form noValidate validated={validatedAddress} onSubmit={handleAddressSubmit}>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='12' className='mb-3'>
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter street name'
                      required
                      name='streetName'
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide the street name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' className='mb-3'>
                    <Form.Label>House Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter house number'
                      required
                      name='houseNumber'
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide the house number.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md='6' className='mb-3'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter postcode'
                      required
                      name='postcode'
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide the postcode.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' className='mb-3'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter city'
                      required
                      name='city'
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide the city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md='6' className='mb-3'>
                    <Form.Label>Floor (optional)</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Type floor number'
                    />
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='12'>
                    <Form.Label>Add Note (optional)</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      placeholder='e.g. Please do not ring the bell. Baby is sleeping.'
                    />
                  </Form.Group>
                </Row>

                <h2 className='form-title'>Personal Information</h2>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom01'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type='text' placeholder='First name' />
                    <Form.Control.Feedback type='invalid'>Please provide a first name.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom02'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type='text' placeholder='Last name' />
                    <Form.Control.Feedback type='invalid'>Please provide a last name.</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-3 mt-3'>
                  <Form.Group as={Col} md='12' className='mb-3' controlId='validationCustomUsername'>
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id='inputGroupPrepend'>+49</InputGroup.Text>
                      <Form.Control
                        type='number'
                        placeholder='123456789'
                        aria-describedby='inputGroupPrepend'
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide a valid phone number.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col} md='12' className='mb-3' controlId='validationCustom04'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Email' required />
                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' className='mb-3'>
                    <Form.Label>Delivery Option</Form.Label>
                    <Form.Control as='select' onChange={(e) => setSelectedDeliveryOption(JSON.parse(e.target.value))}>
                      {deliveryOptions.map(option => (
                        <option key={option.name} value={JSON.stringify(option)}>{option.name} ${option.cost.toFixed(2)}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} md='6'>
                    <Form.Label>Promo Code</Form.Label>
                    <InputGroup className='mb-3'>
                      <Form.Control
                        type='text'
                        placeholder='Enter promo code'
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      
                      <Button className="apply-button" variant='outline-secondary' onClick={applyPromoCode}>
                        Apply
                      </Button>
                    </InputGroup>
                    {promoApplied && <span className='color-gradient'>You get FREE Portal Delivery!</span>}
                    {promoFailed && <span className='error'>Invalid Code</span>}
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col} className='text-center align-self-center mb-3 mt-3' md='5'>
                    <Form.Check
                      required
                      label='Agree to terms and conditions'
                      feedback='You must agree before submitting.'
                      feedbackType='invalid'
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='7' className='text-center mb-3 mt-3'>
                    <div className='pay-button'>
                      <Button type='submit' className='w-75'>
                        Proceed and Pay {calculateTotalPrice()}$
                      </Button>
                    </div>
                  </Form.Group>
                </Row>
              </Form>
            </div>

            {showPaymentOptions && (
              <div>
                <h2 className='form-title'>Payment Information</h2>
                <Form noValidate validated={validatedPayment} onSubmit={handlePaymentSubmit}>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='6' className='mb-3'>
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter card number'
                        required
                        pattern='[0-9]{13,16}' // Simple pattern for credit card numbers (13-16 digits)
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide a valid card number (13-16 digits).
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='3' className='mb-3'>
                      <Form.Label>Exp. Date</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='MM/YY'
                        required
                        pattern='(0[1-9]|1[0-2])\/[0-9]{2}' // Pattern for expiration date in MM/YY format
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide a valid expiration date (MM/YY).
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='3' className='mb-3'>
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='CVV'
                        required
                        pattern='[0-9]{3,4}' // Pattern for CVV (3-4 digits)
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide a valid CVV (3-4 digits).
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div className='pay-button'>
                    <Button type='submit'>
                      {showSpinner ? (
                        <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                      ) : (
                        'Pay Now'
                      )}
                    </Button>
                  </div>
                </Form>

              </div>
            )}

            {showPayment && (
              <Modal show={showPayment} onHide={handleClosePaymentModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Payment Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Your order has been placed!</p>
                  <p>Delivering {selectedDeliveryOption.name.includes('instant') ? 'instantly' : 'in 30 mins'} to your doorstep!</p>
                  <p>Total paid: ${calculateTotalPrice()}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClosePaymentModal}>
                    Close
                  </Button>
                </Modal.Footer>
             </Modal>
            )}
          </div>
        ) : (
          <div className='empty-cart'>
            <h2>Looks like your Cart is empty :(</h2>
            <Link to='/menu'>
              <Button variant='primary'>Go to Menu</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
