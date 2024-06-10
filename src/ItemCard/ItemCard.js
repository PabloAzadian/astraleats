import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ItemCard.css';

function ItemCard({ item }) {
  const [show, setShow] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);

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

  const calculateTotalPrice = () => {
    const extrasTotal = selectedExtras.reduce((acc, extra) => acc + extra.price, 0);
    return (item.price + extrasTotal).toFixed(2);
  };

  return (
    <div onClick={handleShow} className='itemcard'>
      <img src={item.imgsrc} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}€</p>

      <Modal show={show} size='lg' onHide={handleClose}>
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
                <div className="extra" key={extra.id}>
                  
                    <input
                      type="checkbox"
                      value={extra.name}
                      onChange={() => handleExtraChange(extra)}
                    />
                    {extra.name} (+{extra.price}€)
                  
                </div>
              ))}
            </div>
              
            </div>
          </div>
          <div>
              <p>Allergens: {item.allergens}</p>
              <p>Calories: {item.calories}</p>
              <p>Nutritional Info (P/F/C): {item.proteins}g/{item.fats}g/{item.carbs}g</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <p>Total: {calculateTotalPrice()}€</p>
        <button onClick={handleClose}>Add to Cart</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemCard;
