import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ItemCard.css';
import { IoRocket } from "react-icons/io5";
import { useShoppingCart } from '../ShoppingCartContext';  


function ItemCard({ item }) {
  const [show, setShow] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const { setShoppingCart } = useShoppingCart();  

  const handleClose = () => {
    setShow(false);
    setSelectedExtras([]);
  };

  const handleShow = () => setShow(true);

  const handleExtraChange = (extra) => {
    setSelectedExtras((prev) => {
      if (prev.includes(extra)) {
        return prev.filter((e) => e !== extra);
      } else {
        return [...prev, extra];
      }
    });
  };

  const handleAddToCart = () => {
    const updatedItem = {
      name: item.name,
      imgSrc: item.imgsrc,
      extras: selectedExtras,
      price: calculateTotalPrice(),
    };

    setShoppingCart((prevCart) => [...prevCart, updatedItem]);
    setShow(false);
    setSelectedExtras([]);
    alert(`Successfully added ${item.name} to the Cart!`);
  };

  const calculateTotalPrice = () => {
    const extrasTotal = selectedExtras.reduce((acc, extra) => acc + extra.price, 0);
    return (item.price + extrasTotal).toFixed(2);
  };

  return (
    <div>
      <div onClick={handleShow} className='itemcard'>
        <img src={item.imgsrc} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}€</p>
      </div>

      <Modal show={show} size='lg' data-bs-theme="dark" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <img src={item.imgsrc} alt={item.name} className='modal-img' />
            </div>
            <div className='col-12 col-sm-6'>
              <p>{item.description}</p>
              <div className='extras-list'>
                {item.customizations.map((extra) => (
                  <label
                    className={`extra ${selectedExtras.includes(extra) ? 'color-gradient' : ''}`}
                    key={extra.id}
                  >
                    <input
                      type="checkbox"
                      value={extra.name}
                      onChange={() => handleExtraChange(extra)}
                      checked={selectedExtras.includes(extra)}
                    />
                    <span>{extra.name} (+{extra.price}€)</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p><strong>Allergens:</strong> {item.allergens}</p>
            <p><strong>Calories:</strong> {item.calories}</p>
            <p><strong>Nutritional Info (P/F/C):</strong> {item.proteins}g/{item.fats}g/{item.carbs}g</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Total: {calculateTotalPrice()}€</p>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart <IoRocket />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemCard;
