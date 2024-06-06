import React from 'react';
import './IconSlider.css';
import icon1 from "../images/icons/row-1-column-1.png";
import icon2 from "../images/icons/row-1-column-2.png";
import icon3 from "../images/icons/row-1-column-3.png";
import icon4 from "../images/icons/row-1-column-4.png";
import icon5 from "../images/icons/row-2-column-1.png";
import icon6 from "../images/icons/row-2-column-2.png";
import icon7 from "../images/icons/row-2-column-3.png";
import icon8 from "../images/icons/row-2-column-4.png";
import icon9 from "../images/icons/row-3-column-1.png";
import icon10 from "../images/icons/row-3-column-2.png";
import icon11 from "../images/icons/row-3-column-3.png";
import icon12 from "../images/icons/row-4-column-3.png";
import separator from "../images/icons/separator.png"

const icons = [
  icon1, icon2, icon3, icon4, icon5, icon6,
  icon7, icon8, icon9, icon10, icon11, icon12,
  icon1, icon2, icon3, icon4, icon5, icon6,
  icon7, icon8, icon9, icon10, icon11, icon12
  
];

const IconSlider = () => {
  return (
    <div className="icon-slider">
      <div className="marquee">
        {icons.concat(icons).map((icon, index) => (
          <>
          <img key={index} src={icon} alt={`Icon ${index + 1}`} />
          <img src={separator} alt={`separator ${index + 1}`} />
          </>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;
