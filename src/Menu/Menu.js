import React, { useState } from 'react';
import items from '../Items';
import ItemCard from '../ItemCard/ItemCard';
import './Menu.css';
import Starters from '../images/icons/starters.png';
import MainDish from '../images/icons/MainDish.png';
import Drinks from '../images/icons/drinks.png';
import Desserts from '../images/icons/dessert.png';
import Sides from "../images/icons/Sides.png";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { name: 'Starters', category: 'Starter', src: Starters },
    { name: 'Main Dishes', category: 'Main Dishe', src: MainDish },
    { name: "Sides", category: "Side", src: Sides },
    { name: 'Drinks', category: 'Drink', src: Drinks },
    { name: 'Desserts', category: 'Dessert', src: Desserts }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='menu container'>
      <h1 className='menu-title'>Menu</h1>
      <div className='categories-wrapper'>
        <div className='categories'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category ${selectedCategory === category.category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.category)}
            >
              <img src={category.src} alt={category.name} />
              <h4 className={`category ${selectedCategory === category.category ? 'color-gradient' : ''}`}>{category.name}</h4>
            </div>
          ))}
        </div>
      </div>
      {selectedCategory ? (
        <div className='category-container'>
          <h2>{selectedCategory}s</h2>
          <div className='card-displayer'>
            {items
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <ItemCard key={index} item={item} />
              ))}
          </div>
        </div>
      ) : (
        <div>
          {categories.map((category, index) => (
            <div className='category-container' key={index}>
              <h2>{category.name}</h2>
              <div className='card-displayer'>
                {items
                  .filter((item) => item.category === category.category)
                  .map((item, index) => (
                    <ItemCard key={index} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
