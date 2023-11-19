import React, { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa' 
import '../src/Styles/Navbar.css'
import  '../src/Cards/Cards.jsx'

function Navbar()  {
  const navRef= useRef();

  const showNavbar =() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
        <h1>
            Flower Blossoms
        </h1>
        <nav ref={navRef}>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Order</a>
           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button > 
        </nav>
        <button className="nav-btn" onClick={showNavbar}> <FaBars /></button> 
    </header>
  )
}

export default Navbar