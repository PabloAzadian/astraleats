import React, { useState, useEffect } from 'react';
import "./Testimonials.css";
import testimonials from '../TestimonialsList'; // Make sure to import the testimonials array

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <>
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index}>
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className='container testimonials-section'>
      <h1>Testimonials from our Clients</h1>
      <div className='carousel'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className='testimonial-person'>
              <img src={testimonial.imgsrc} alt={testimonial.name} className='avatar' />
              <h5>{testimonial.name}</h5>
            </div>
            <p>{testimonial.testimonial}</p>
            <div className='date-rating'>
              <div className='stars'>
              {renderStars(testimonial.rating)}
              </div>
            
            <span >{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;