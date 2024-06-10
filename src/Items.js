import Burger from "./images/Main Dish/Burger.png";
import Noodles from "./images/Main Dish/Noodles.png";
import Lasagna from "./images/Main Dish/Lasagna.png";
import Paella from "./images/Main Dish/Paella.png";
import Pizza from "./images/Main Dish/Pizza.png";
import Soup from "./images/Main Dish/Soup.png";
import StirFry from "./images/Main Dish/StirFry.png";
import Sushi from "./images/Main Dish/Sushi.png";
import Tacos from "./images/Main Dish/Tacos.png";
import Donuts from "./images/Desserts/Donuts.png"
import Cupcake from "./images/Desserts/Cupcake.png"
import Cake from "./images/Desserts/cake.png"
import Icecream from "./images/Desserts/icecream.png"
import Icedtea from "./images/Drinks/iced tea.png"
import Cola from "./images/Drinks/soda.png"
import Lemonade from "./images/Drinks/lemonade.png"
import Smoothie from "./images/Drinks/Smoothie.png"
import Nachos from "./images/Starters/nachos.png"
import OnionRings from "./images/Starters/onionrings.png"
import SpringRolls from "./images/Starters/SpringRolls.png"
import Mushrooms from "./images/Starters/Mushrooms.png"
import Fries from "./images/SideDishes/fries.png"
import Veggies from "./images/SideDishes/grilledVeggies.png"
import MacNCheese from "./images/SideDishes/MacnCheese.png"
import Salad from "./images/SideDishes/salad.png"


const items = [
  {
    name: "Asteroid Burger",
    description: "A burger with a black sesame seed bun resembling an asteroid, featuring exotic alien meats and bioluminescent lettuce.",
    price: 12.99,
    imgsrc: Burger,
    category: "Main Dishe",
    calories: 800,
    proteins: 30,
    fats: 45,
    carbs: 70,
    allergens: "Contains dairy, gluten, sesame",
    customizations: [
      { id: 1, name: 'Extra Patty', price: 3.0 },
      { id: 2, name: 'Add Cheese', price: 1.5 },
      { id: 3, name: 'Gluten-Free Bun', price: 2.0 },
    ]
  },
  {
    name: "Nebula Noodles",
    description: "Colorful noodles that glow with bioluminescent hues, topped with floating orbs of alien seafood.",
    price: 10.99,
    imgsrc: Noodles,
    category: "Main Dishe",
    calories: 600,
    proteins: 25,
    fats: 15,
    carbs: 80,
    allergens: "Contains seafood, gluten, soy",
    customizations: [
      { id: 1, name: 'Extra Seafood', price: 2.5 },
      { id: 2, name: 'Add Vegetables', price: 1.5 },
      { id: 3, name: 'Make it Spicy', price: 0.5 },
    ]
  },
  {
    name: "Galactic Lasagna",
    description: "A multi-layered lasagna with vibrant, glowing layers of alien cheeses and meats.",
    price: 14.99,
    imgsrc: Lasagna,
    category: "Main Dishe",
    calories: 1000,
    proteins: 40,
    fats: 60,
    carbs: 85,
    allergens: "Contains dairy, gluten",
    customizations: [
      { id: 1, name: 'Extra Cheese', price: 2.0 },
      { id: 2, name: 'Add Vegetables', price: 1.5 },
      { id: 3, name: 'Gluten-Free Pasta', price: 2.5 },
    ]
  },
  {
    name: "Cosmic Paella",
    description: "A paella dish with glowing grains of rice, exotic alien seafood, and bioluminescent herbs.",
    price: 18.99,
    imgsrc: Paella,
    category: "Main Dishe",
    calories: 700,
    proteins: 35,
    fats: 25,
    carbs: 85,
    allergens: "Contains seafood",
    customizations: [
      { id: 1, name: 'Extra Seafood', price: 3.0 },
      { id: 2, name: 'Add Vegetables', price: 1.5 },
      { id: 3, name: 'Make it Spicy', price: 0.5 },
    ]
  },
  {
    name: "Interstellar Pizza",
    description: "A pizza with a crust resembling a ringed planet, topped with glowing alien vegetables and bioluminescent cheese.",
    price: 11.99,
    imgsrc: Pizza,
    category: "Main Dishe",
    calories: 900,
    proteins: 20,
    fats: 35,
    carbs: 110,
    allergens: "Contains dairy, gluten",
    customizations: [
      { id: 1, name: 'Extra Cheese', price: 1.5 },
      { id: 2, name: 'Add Pepperoni', price: 2.0 },
      { id: 3, name: 'Gluten-Free Crust', price: 2.5 },
    ]
  },
  {
    name: "Supernova Soup",
    description: "A soup with a glowing, swirling broth and pieces of alien vegetables and meats.",
    price: 7.99,
    imgsrc: Soup,
    category: "Main Dishe",
    calories: 300,
    proteins: 15,
    fats: 10,
    carbs: 25,
    allergens: "Contains dairy, gluten",
    customizations: [
      { id: 1, name: 'Extra Meat', price: 2.0 },
      { id: 2, name: 'Spicy', price: 0.5 },
      { id: 3, name: 'Add Noodles', price: 1.5 },
    ]
  },
  {
    name: "Quantum Stir Fry",
    description: "A stir fry with vibrant, bioluminescent vegetables and alien proteins.",
    price: 13.99,
    imgsrc: StirFry,
    category: "Main Dishe",
    calories: 600,
    proteins: 25,
    fats: 20,
    carbs: 60,
    allergens: "Contains soy, gluten",
    customizations: [
      { id: 1, name: 'Extra Vegetables', price: 1.5 },
      { id: 2, name: 'Add Tofu', price: 2.0 },
      { id: 3, name: 'Make it Spicy', price: 0.5 },
    ]
  },
  {
    name: "Astro Sushi",
    description: "Sushi rolls with glowing rice and exotic alien seafood.",
    price: 15.99,
    imgsrc: Sushi,
    category: "Main Dishe",
    calories: 400,
    proteins: 30,
    fats: 10,
    carbs: 50,
    allergens: "Contains seafood, soy, gluten",
    customizations: [
      { id: 1, name: 'Extra Seafood', price: 3.0 },
      { id: 2, name: 'Add Avocado', price: 1.5 },
      { id: 3, name: 'Make it Spicy', price: 0.5 },
    ]
  },
  {
    name: "Galactic Tacos",
    description: "Tacos with bioluminescent fillings of alien meats and vegetables.",
    price: 9.99,
    imgsrc: Tacos,
    category: "Main Dishe",
    calories: 500,
    proteins: 20,
    fats: 25,
    carbs: 50,
    allergens: "Contains gluten",
    customizations: [
      { id: 1, name: 'Extra Meat', price: 2.0 },
      { id: 2, name: 'Add Cheese', price: 1.0 },
      { id: 3, name: 'Gluten-Free Tortilla', price: 1.5 },
    ]
  },
  {
    name: "Galaxy Cupcake",
    description: "A cupcake with galaxy swirl frosting, shimmering with edible glitter, topped with a tiny edible planet.",
    price: 5.99,
    imgsrc: Cupcake,
    category: "Dessert",
    calories: 450,
    proteins: 4,
    fats: 20,
    carbs: 65,
    allergens: "Contains dairy, gluten, eggs",
    customizations: [
      { id: 1, name: 'Extra Frosting', price: 1.0 },
      { id: 2, name: 'Add Sprinkles', price: 0.5 },
      { id: 3, name: 'Gluten-Free', price: 1.5 },
    ]
  },
  {
    name: "Nebula Cheesecake",
    description: "A cheesecake with vibrant nebula-like swirls of blue, purple, and pink, with a dusting of stardust powder.",
    price: 6.99,
    imgsrc: Cake,
    category: "Dessert",
    calories: 550,
    proteins: 8,
    fats: 35,
    carbs: 45,
    allergens: "Contains dairy, gluten, eggs",
    customizations: [
      { id: 1, name: 'Extra Swirl', price: 1.0 },
      { id: 2, name: 'Add Berries', price: 1.5 },
      { id: 3, name: 'Gluten-Free', price: 1.5 },
    ]
  },
  {
    name: "Cosmic Donuts",
    description: "Donuts with a glossy galaxy glaze featuring stars and nebula patterns, sprinkled with edible gold flakes.",
    price: 4.99,
    imgsrc: Donuts,
    category: "Dessert",
    calories: 350,
    proteins: 3,
    fats: 18,
    carbs: 45,
    allergens: "Contains dairy, gluten, eggs",
    customizations: [
      { id: 1, name: 'Extra Glaze', price: 0.75 },
      { id: 2, name: 'Add Chocolate Drizzle', price: 1.0 },
      { id: 3, name: 'Gluten-Free', price: 1.5 },
    ]
  },
  {
    name: "Stellar Ice Cream",
    description: "A scoop of ice cream in dark blue and purple colors, sprinkled with edible stars and sparkles.",
    price: 3.99,
    imgsrc: Icecream,
    category: "Dessert",
    calories: 250,
    proteins: 5,
    fats: 15,
    carbs: 30,
    allergens: "Contains dairy",
    customizations: [
      { id: 1, name: 'Extra Stars', price: 0.5 },
      { id: 2, name: 'Add Chocolate Chips', price: 0.75 },
      { id: 3, name: 'Add Caramel Drizzle', price: 1.0 },
    ]
  },
  {
    name: "Galactic Iced Tea",
    description: "A refreshing iced tea infused with bioluminescent alien herbs and a hint of cosmic lemon.",
    price: 4.99,
    imgsrc: Icedtea,
    category: "Drink",
    calories: 80,
    proteins: 0,
    fats: 0,
    carbs: 20,
    allergens: "None",
    customizations: [
      { id: 1, name: 'Extra Lemon', price: 0.5 },
      { id: 2, name: 'Add Mint', price: 0.5 },
      { id: 3, name: 'Less Sugar', price: 0 },
    ]
  },
  {
    name: "Lunar Lemonade",
    description: "A zesty lemonade made with glowing lunar lemons and a touch of alien mint.",
    price: 3.99,
    imgsrc: Lemonade,
    category: "Drink",
    calories: 100,
    proteins: 0,
    fats: 0,
    carbs: 25,
    allergens: "None",
    customizations: [
      { id: 1, name: 'Extra Lemon', price: 0.5 },
      { id: 2, name: 'Add Mint', price: 0.5 },
      { id: 3, name: 'Less Sugar', price: 0 },
    ]
  },
  {
    name: "Stellar Smoothie",
    description: "A vibrant smoothie blending intergalactic fruits and bioluminescent berries.",
    price: 6.99,
    imgsrc: Smoothie,
    category: "Drink",
    calories: 200,
    proteins: 2,
    fats: 1,
    carbs: 50,
    allergens: "Contains dairy",
    customizations: [
      { id: 1, name: 'Extra Berries', price: 1.0 },
      { id: 2, name: 'Add Protein Powder', price: 1.5 },
      { id: 3, name: 'No Dairy', price: 0 },
    ]
  },
  {
    name: "Cosmic Cola",
    description: "A fizzy soda with a unique blend of alien spices and a refreshing cosmic aftertaste.",
    price: 2.99,
    imgsrc: Cola,
    category: "Drink",
    calories: 150,
    proteins: 0,
    fats: 0,
    carbs: 40,
    allergens: "None",
    customizations: [
      { id: 1, name: 'Extra Ice', price: 0 },
      { id: 2, name: 'Lemon Slice', price: 0.5 },
      { id: 3, name: 'Cherry Flavor', price: 0.5 },
    ]
  },
  {
    name: "Cosmic Nachos",
    description: "Corn chips topped with bioluminescent cheese, exotic alien meats, and vibrant alien salsa.",
    price: 7.99,
    imgsrc: Nachos,
    category: "Starter",
    calories: 600,
    proteins: 20,
    fats: 30,
    carbs: 50,
    allergens: "Contains dairy, gluten",
    customizations: [
      { id: 1, name: 'Extra Cheese', price: 1.0 },
      { id: 2, name: 'Spicy Salsa', price: 0.5 },
      { id: 3, name: 'Guacamole', price: 1.5 },
    ]
  },
  {
    name: "Galactic Onion Rings",
    description: "Crispy onion rings with a glowing, bioluminescent dipping sauce.",
    price: 5.99,
    imgsrc: OnionRings,
    category: "Starter",
    calories: 400,
    proteins: 5,
    fats: 20,
    carbs: 50,
    allergens: "Contains gluten",
    customizations: [
      { id: 1, name: 'Extra Dipping Sauce', price: 0.75 },
      { id: 2, name: 'Add Cheese', price: 1.0 },
      { id: 3, name: 'Spicy Coating', price: 0.5 },
    ]
  },
  {
    name: "Alien Spring Rolls",
    description: "Crispy spring rolls filled with bioluminescent alien vegetables and served with a tangy cosmic dipping sauce.",
    price: 6.99,
    imgsrc: SpringRolls,
    category: "Starter",
    calories: 350,
    proteins: 10,
    fats: 15,
    carbs: 40,
    allergens: "Contains soy",
    customizations: [
      { id: 1, name: 'Extra Dipping Sauce', price: 0.75 },
      { id: 2, name: 'Add Tofu', price: 1.5 },
      { id: 3, name: 'Spicy Sauce', price: 0.5 },
    ]
  },
  {
    name: "Stellar Stuffed Mushrooms",
    description: "Mushrooms stuffed with a mix of glowing alien cheeses and herbs, baked to perfection.",
    price: 7.99,
    imgsrc: Mushrooms,
    category: "Starter",
    calories: 300,
    proteins: 8,
    fats: 25,
    carbs: 10,
    allergens: "Contains dairy",
    customizations: [
      { id: 1, name: 'Extra Cheese', price: 1.0 },
      { id: 2, name: 'Add Bacon Bits', price: 1.5 },
      { id: 3, name: 'Garlic Herb Sauce', price: 0.75 },
    ]
  },
  {
    name: "Cosmic Fries",
    description: "Crispy fries seasoned with interstellar spices and a side of bioluminescent dipping sauce.",
    price: 4.99,
    imgsrc: Fries,
    category: "Side",
    calories: 300,
    proteins: 4,
    fats: 15,
    carbs: 40,
    allergens: "Contains gluten, soy",
    customizations: [
      { id: 1, name: 'Extra Spices', price: 0.5 },
      { id: 2, name: 'Cheese Sauce', price: 1.0 },
      { id: 3, name: 'Extra Dipping Sauce', price: 0.75 },
    ]
  },
  {
    name: "Martian Salad",
    description: "A fresh salad with glowing greens, alien vegetables, and a tangy cosmic dressing.",
    price: 6.99,
    imgsrc: Salad,
    category: "Side",
    calories: 150,
    proteins: 5,
    fats: 8,
    carbs: 12,
    allergens: "Contains nuts",
    customizations: [
      { id: 1, name: 'Extra Dressing', price: 0.5 },
      { id: 2, name: 'Add Avocado', price: 1.5 },
      { id: 3, name: 'Add Grilled Chicken', price: 2.0 },
    ]
  },
  {
    name: "Astro Mac & Cheese",
    description: "Creamy macaroni and cheese with glowing, bioluminescent cheese and a sprinkle of alien herbs.",
    price: 6.99,
    imgsrc: MacNCheese,
    category: "Side",
    calories: 500,
    proteins: 12,
    fats: 25,
    carbs: 50,
    allergens: "Contains dairy, gluten",
    customizations: [
      { id: 1, name: 'Extra Cheese', price: 1.0 },
      { id: 2, name: 'Bacon Bits', price: 1.5 },
      { id: 3, name: 'Truffle Oil', price: 2.0 },
    ]
  },
  {
    name: "Galactic Grilled Vegetables",
    description: "A medley of bioluminescent alien vegetables grilled with cosmic spices and served with a side of glowing dipping sauce.",
    price: 5.99,
    imgsrc: Veggies,
    category: "Side",
    calories: 200,
    proteins: 3,
    fats: 10,
    carbs: 20,
    allergens: "Contains soy",
    customizations: [
      { id: 1, name: 'Extra Spices', price: 0.5 },
      { id: 2, name: 'Add Tofu', price: 1.5 },
      { id: 3, name: 'Extra Dipping Sauce', price: 0.75 },
    ]
  }
];

export default items;

  