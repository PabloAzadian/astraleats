import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import IconSlider from './IconSlider/IconSlider';
import Hero from "./Hero/Hero";
import NavBar from './Navbar/NavBar';
import MilkyWay from './MilkyWay/MilkyWay';
import PortalDelivery from './PortalDelivery/PortalDelivery';
import Menu from './Menu/Menu';
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import { ShoppingCartProvider } from './ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Router>
      <div className="App">
        <NavBar />
        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
    </ShoppingCartProvider>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <IconSlider />
      <MilkyWay />
      <PortalDelivery />
      <Testimonials />
    </>
  );
}

export default App;
