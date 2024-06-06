import React from 'react'
import Portal from "../images/portal2.png"
import "./PortalDelivery.css"

function PortalDelivery() {
  return (
    <div className='container '>
        <div className='delivery-section'>
            
            <div className='delivery-text'>
                <h1>Instant Delivery With Our New Portal Technology</h1>
                <p>Experience the future of food delivery with Astral Eats' cutting-edge portal technology.
                     Our innovative portals ensure your favorite alien dishes are delivered instantly, right to your doorstep.
                      No more waiting or worrying about long-distance deliveries – our portals make it faster and easier than 
                      ever to enjoy the cosmic cuisine you love.</p>
                <p>At Checkout: Use our Code <h4 className='color-gradient2 code'>PORTAL2024</h4> and secure yourself a free portal delivery!</p>
            </div>
            <div>
                <img src={Portal}/>
            </div>
        </div>
    </div>

  )
}

export default PortalDelivery