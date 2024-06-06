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
    category: "Main Dishe"
  },
  {
    name: "Nebula Noodles",
    description: "Colorful noodles that glow with bioluminescent hues, topped with floating orbs of alien seafood.",
    price: 10.99,
    imgsrc: Noodles,
    category: "Main Dishe"
  },
  {
    name: "Galactic Lasagna",
    description: "A multi-layered lasagna with vibrant, glowing layers of alien cheeses and meats.",
    price: 14.99,
    imgsrc: Lasagna,
    category: "Main Dishe"
  },
  {
    name: "Cosmic Paella",
    description: "A paella dish with glowing grains of rice, exotic alien seafood, and bioluminescent herbs.",
    price: 18.99,
    imgsrc: Paella,
    category: "Main Dishe"
  },
  {
    name: "Interstellar Pizza",
    description: "A pizza with a crust resembling a ringed planet, topped with glowing alien vegetables and bioluminescent cheese.",
    price: 11.99,
    imgsrc: Pizza,
    category: "Main Dishe"
  },
  {
    name: "Supernova Soup",
    description: "A soup with a glowing, swirling broth and pieces of alien vegetables and meats.",
    price: 7.99,
    imgsrc: Soup,
    category: "Main Dishe"
  },
  {
    name: "Quantum Stir Fry",
    description: "A stir fry with vibrant, bioluminescent vegetables and alien proteins.",
    price: 13.99,
    imgsrc: StirFry,
    category: "Main Dishe"
  },
  {
    name: "Astro Sushi",
    description: "Sushi rolls with glowing rice and exotic alien seafood.",
    price: 15.99,
    imgsrc: Sushi,
    category: "Main Dishe"
  },
  {
    name: "Galactic Tacos",
    description: "Tacos with bioluminescent fillings of alien meats and vegetables.",
    price: 9.99,
    imgsrc: Tacos,
    category: "Main Dishe"
  },
  {
    name: "Galaxy Cupcake",
    description: "A cupcake with galaxy swirl frosting, shimmering with edible glitter, topped with a tiny edible planet.",
    price: 5.99,
    imgsrc: Cupcake,
    category: "Dessert"
  },
  {
    name: "Nebula Cheesecake",
    description: "A cheesecake with vibrant nebula-like swirls of blue, purple, and pink, with a dusting of stardust powder.",
    price: 6.99,
    imgsrc: Cake,
    category: "Dessert"
  },
  {
    name: "Cosmic Donuts",
    description: "Donuts with a glossy galaxy glaze featuring stars and nebula patterns, sprinkled with edible gold flakes.",
    price: 4.99,
    imgsrc: Donuts,
    category: "Dessert"
  },
  {
    name: "Stellar Ice Cream",
    description: "A scoop of ice cream in dark blue and purple colors, sprinkled with edible stars and sparkles.",
    price: 3.99,
    imgsrc: Icecream,
    category: "Dessert"
  },
  {
    name: "Galactic Iced Tea",
    description: "A refreshing iced tea infused with bioluminescent alien herbs and a hint of cosmic lemon.",
    price: 4.99,
    imgsrc: Icedtea,
    category: "Drink"
  },
  {
    name: "Lunar Lemonade",
    description: "A zesty lemonade made with glowing lunar lemons and a touch of alien mint.",
    price: 3.99,
    imgsrc: Lemonade,
    category: "Drink"
  },
  {
    name: "Stellar Smoothie",
    description: "A vibrant smoothie blending intergalactic fruits and bioluminescent berries.",
    price: 6.99,
    imgsrc: Smoothie,
    category: "Drink"
  },
  {
    name: "Cosmic Cola",
    description: "A fizzy soda with a unique blend of alien spices and a refreshing cosmic aftertaste.",
    price: 2.99,
    imgsrc: Cola,
    category: "Drink"
  },
  {
    name: "Cosmic Nachos",
    description: "Corn chips topped with bioluminescent cheese, exotic alien meats, and vibrant alien salsa.",
    price: 7.99,
    imgsrc: Nachos,
    category: "Starter"
  },
  {
    name: "Galactic Onion Rings",
    description: "Crispy onion rings with a glowing, bioluminescent dipping sauce.",
    price: 5.99,
    imgsrc: OnionRings,
    category: "Starter"
  },
  {
    name: "Alien Spring Rolls",
    description: "Crispy spring rolls filled with bioluminescent alien vegetables and served with a tangy cosmic dipping sauce.",
    price: 6.99,
    imgsrc: SpringRolls,
    category: "Starter"
  },
  {
    name: "Stellar Stuffed Mushrooms",
    description: "Mushrooms stuffed with a mix of glowing alien cheeses and herbs, baked to perfection.",
    price: 7.99,
    imgsrc: Mushrooms,
    category: "Starter"
  },
  {
    name: "Cosmic Fries",
    description: "Crispy fries seasoned with interstellar spices and a side of bioluminescent dipping sauce.",
    price: 4.99,
    imgsrc: Fries,
    category: "Side"
  },
  {
    name: "Martian Salad",
    description: "A fresh salad with glowing greens, alien vegetables, and a tangy cosmic dressing.",
    price: 6.99,
    imgsrc: Salad,
    category: "Side"
  },
  {
    name: "Astro Mac & Cheese",
    description: "Creamy macaroni and cheese with glowing, bioluminescent cheese and a sprinkle of alien herbs.",
    price: 6.99,
    imgsrc: MacNCheese,
    category: "Side"
  },
  {
    name: "Galactic Grilled Vegetables",
    description: "A medley of bioluminescent alien vegetables grilled with cosmic spices and served with a side of glowing dipping sauce.",
    price: 5.99,
    imgsrc: Veggies,
    category: "Side"
  }
];

export default items;

  