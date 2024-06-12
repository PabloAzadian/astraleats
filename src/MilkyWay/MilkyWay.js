import React from 'react';
import { useNavigate } from 'react-router-dom';
import Milky from "../images/milky-way.avif";
import "./MilkyWay.css";
import { IoRocket } from "react-icons/io5";

function MilkyWay() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='delivery-section'>
        <div>
          <img src={Milky} />
        </div>
        <div className='delivery-text'>
          <h1>Now delivering to the whole Milky Way!</h1>
          <p>At Astral Eats, we're excited to announce that we now offer delivery to the entire galaxy! 
            Whether you're on Earth, Mars, or any distant planet, you can enjoy our delicious alien dishes. Our advanced
            spacecraft and interstellar delivery team ensure your food arrives fresh and fast, no matter where you are.
            Taste the flavors of the universe without ever leaving your home!
          </p>
          <button onClick={() => navigate('/menu')} className='color-gradient'><p>Order Now <IoRocket /></p></button>
        </div>
      </div>
    </div>
  );
}

export default MilkyWay;
