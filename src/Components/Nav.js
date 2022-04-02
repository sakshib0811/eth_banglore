import React, { useState }  from 'react'
import "./Nav.css"
// import { Link } from 'react-router-dom';
import { FaEthereum } from "react-icons/fa";
function Nav() {

    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (

    <nav className="nav">
      <a href="#" className="nav__brand">
        <FaEthereum /> ETHbanglore
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Sponsors
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Prizes
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Challenges
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Workshops
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            How it Work
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  )

  
}

export default Nav