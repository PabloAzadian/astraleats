import React from 'react';
import Card from "react-bootstrap/Card";
import "./CheckOutItem.css"


function CheckOutItem(props) {
  return (
    <div className="side-cart-item p-2">
      <Card className="d-flex  flex-row w-100">
        <Card.Body className='gap-0'>
          <Card.Title>
            <p>1x    {props.item.name}</p>
            <button className='remove-item' onClick={() => props.removeItem(props.index)}><span>x</span></button>
          </Card.Title>
          <Card.Text className="d-flex gap-2 flex-column  h-100">
            <div className='checkout-item-modifiers'>
              {props.item.extras.map((extra, index) => (
                <p key={index}>{extra.name} (+{extra.price}€)</p>
              ))}
            </div>
            <div className='prices gap-2 d-flex'>
              
                <span>{props.item.price}€</span>
              
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CheckOutItem;
