import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { TbClockHour5 } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Hero.css"
import HeroImg from "../images/Hero.avif"


function Hero({setScene}) {
  return (
    <div className='container hero'>
        <div className='hero-container'>
            <div className='content'>
                <h1 className='name color-gradient'>Astral Eats</h1>
                <div className='infos'>
                <p className='lema'>Martian Food delivered to your home planet</p>
                <p><FaLocationDot /> Martian Street 345, 523369</p>
                <p><TbClockHour5/> 24/7/365</p>
                <p><BsFillTelephoneFill/> 515269 5161 333225</p>
                </div>
                
                <div className='buttons'>
                    <button onClick={() => setScene("Menu")}> <p className='color-gradient2'>Our Menu</p></button>
                    <button onClick={() => setScene("AboutUs")}> <p className='color-gradient2'>About Us</p></button>
                </div>
                
            </div>
            <div>
                <img src={HeroImg} />
            </div>
        </div>
    </div>
  )
}

export default Hero