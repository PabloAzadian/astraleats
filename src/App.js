import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import IconSlider from './IconSlider/IconSlider';
import Hero from "./Hero/Hero";
import NavBar from './Navbar/NavBar';
import MilkyWay from './MilkyWay/MilkyWay';
import PortalDelivery from './PortalDelivery/PortalDelivery';
import Menu from './Menu/Menu';
import Testimonials from "./Testimonials/Testimonials";
<<<<<<< HEAD
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
=======
import Footer from "./Footer/Footer"
import AboutUs from "./AboutUs/AboutsUs";
>>>>>>> 9aa6c990ebcc48314762507fe4e0aa78b6a0f122

function App() {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 9aa6c990ebcc48314762507fe4e0aa78b6a0f122
  );
}

export default App;
