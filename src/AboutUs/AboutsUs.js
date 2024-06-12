import React from 'react';
import "./AboutUs.css";
import aboutImage from '../images/About Us.png';

function AboutUs() {
  return (
    <div className='about-us-container container'>
      <div className='about-content row'>
        <div className='col-xl-6 col-lg-5 col-12 about-main-text'>
          <div>
            <h1>About Us</h1>
            <p>
              Welcome to <strong className="color-gradient">Astral Eats</strong>! Embark on an extraordinary culinary journey through the cosmos from the comfort of your home. Each dish is crafted with bioluminescent ingredients and exotic alien flavors. Our mission is to bring the wonders of the galaxy to your plate, offering an unforgettable dining experience.
            </p>
          </div>
          <div>
            <p>
              Astral Eats was born from a passion for space exploration and a love for innovative cuisine. Founded by a team of chefs and space enthusiasts, our delivery service aims to blend the marvels of the universe with culinary artistry. From experimenting with interstellar spices to creating bioluminescent dishes, we constantly push the boundaries of gastronomy.
            </p>
          </div>
        </div>
        <div className='col-xl-6 col-lg-7 col-12'>
          <img src={aboutImage} alt="Astral Eats" className='about-image' />
        </div>
      </div>
      <div>
        <h2>Our Values</h2>
        <ul>
          <li><strong className="color-gradient2">Innovation:</strong> We embrace creativity and innovation in every dish we prepare.</li>
          <li><strong className="color-gradient">Sustainability:</strong> Our ingredients are sourced sustainably, ensuring we protect the planets and their ecosystems.</li>
          <li><strong className="color-gradient2">Customer Experience:</strong> We are dedicated to providing an exceptional dining experience, with a focus on quality and service.</li>
          <li><strong className="color-gradient">Community:</strong> We believe in giving back and actively participate in local and galactic community initiatives.</li>
        </ul>
        <h2>Unique Features</h2>
        <ul>
          <li><strong className="color-gradient2">Bioluminescent Cuisine:</strong> Our dishes glow with bioluminescent ingredients, creating a visually stunning dining experience.</li>
          <li><strong className="color-gradient">Alien Flavors:</strong> Explore flavors from across the galaxy, with exotic ingredients sourced from distant planets.</li>
          <li><strong className="color-gradient2">Futuristic Ambiance:</strong> Our meals are packaged in sleek, modern containers with cosmic designs, making you feel like you’re dining among the stars.</li>
          <li><strong className="color-gradient">Interactive Technology:</strong> From holographic menus to virtual reality dining experiences, we incorporate cutting-edge technology to enhance your visit.</li>
          <li><strong className="color-gradient2">Prompt Delivery:</strong> We ensure your food arrives hot and fresh, with delivery times that are out of this world.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
