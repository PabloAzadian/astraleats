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
  const [validated, setValidated] = useState(false);
  const [validated2, setValidated2] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState([
    { name: 'Spaceship Delivery (30 min)', cost: 5.00 },
    { name: 'Portal Delivery (instant)', cost: 15.00 }, // Default cost for Portal Delivery
  ]);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(deliveryOptions[0]);

  const handleInputChange = e => {
    const form = e.currentTarget.form;
    if (form.checkValidity()) {
      setShowPaymentOptions(true);
    } else {
      setShowPaymentOptions(false);
    }
    setValidated(true);
  };

  const handlePayment = async e => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form.checkValidity()) {
      setShowSpinner(true); // Show loading spinner
      await simulatePayment(); // Simulate payment processing time
      setShowSpinner(false); // Hide loading spinner

      setShowPayment(true); // Show payment success message
      setShoppingCart([]); // Empty the shopping cart upon successful payment
    } else {
      setValidated2(true);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'portal 2024') {
      // Apply promo code logic
      const updatedOptions = [...deliveryOptions];
      const portalDeliveryOption = updatedOptions.find(option => option.name === 'Portal Delivery');
      if (portalDeliveryOption) {
        portalDeliveryOption.cost = 0; // Set Portal Delivery cost to 0
        setDeliveryOptions(updatedOptions);
        setPromoApplied(true);
      }
    } else {
      // Handle other promo codes if needed
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
    totalPrice += selectedDeliveryOption.cost;
    return totalPrice.toFixed(2);
  };

  return (
    <div className='background-container'>
      <div className='checkout-container container'>
        <h1 className='checkout-title'>Check Out</h1>
        {shoppingCart.length > 0 ? (
          <div className='form-container'>
            <div>
              <h2 className='form-title'>Delivery Address</h2>
              <Row className='mb-3'>
                <Form.Group as={Col} md='12' className='mb-3'>
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter street name'
                        required
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
                <Form.Group as={Col} md='12' >
                  <Form.Label>Add Note (optional)</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='e.g. Please do not ring the bell. Baby is sleeping.'
                  />
                </Form.Group>
              </Row>

              <h2 className='form-title'>Personal Information</h2>
              <Form noValidate validated={validated}>
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
                      <Button variant='outline-secondary' onClick={applyPromoCode}>
                        Apply
                      </Button>
                    </InputGroup>
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
                    <button className='w-75' onClick={handleInputChange}>
                      Proceed and Pay {calculateTotalPrice()}$
                    </button>
                    </div>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </div>
        ) : (
          <div className='text-center font-weight-bold'>Looks like your Cart is empty :(</div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
