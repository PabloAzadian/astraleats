import {React, useState} from "react"
import './App.css';
import hero from "./images/Hero.png"
import hero2 from "./images/About Us.png"
import IconSlider from './IconSlider/IconSlider';
import Hero from "./Hero/Hero";
import NavBar from './Navbar/NavBar';
import MilkyWay from './MilkyWay/MilkyWay';
import PortalDelivery from './PortalDelivery/PortalDelivery';
import Menu from './Menu/Menu';
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer"
import AboutUs from "./AboutUs/AboutsUs";

function App() {
  const [scene, setScene] = useState("Home")
  return (
    <div className="App">
      <NavBar setScene={setScene}/>
      <header>
        {scene== "AboutUs" &&<AboutUs/>}
        {scene== "Menu" &&<Menu/>}
        {scene == "Home" && <>
        <Hero setScene={setScene}/>
        <IconSlider />
        <MilkyWay setScene={setScene}/>
        <PortalDelivery/>
        <Testimonials/>
        </>}
        
      </header>
      <Footer />
    </div>
  );
}

export default App;
