import { Link } from "react-router-dom"
import "../stylesheets/Navbar.css"
import logo from "../images/navbar/car-rental-logo.jpg"
import { useState } from "react"
import { FaListUl, FaX } from "react-icons/fa6"

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  }

  return (
    <nav>
    {/* MOBILE */}
    <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
      <div onClick={openNav} className="mobile-navbar-close">
        <FaX width={30} height={30} />
      </div>
      <ul className="mobile-navbar-links">
        <li>
          <Link onClick={openNav} to ="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to ="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to ="/vehicle-models">
            Vehicle Models
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to ="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to ="/our-team">
            Our Team
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to ="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* DESKTOP */}
    <div className='navbar'>
        <div className='navbar-img'>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Logo Img" />
          </Link>
        </div>
        <ul className='navbar-links'>
          <li>
            <Link className="home-link" to="/">Home</Link>
          </li>
          <li>
            {""}
            <Link className="about-link" to="/about">About</Link>
          </li>
          <li>
            {""}
            <Link className="models-link" to="/vehicle-models">Vehicle Models</Link>
          </li>
          <li>
            {""}
            <Link className="testimonials-link" to="/testimonials">Testimonials</Link>
          </li>
          <li>
            {""}
            <Link className="team-link" to="/our-team">Our Team</Link>
          </li>
          <li>
            {""}
            <Link className="contact-link" to="/contact">Contact</Link>
          </li>
        </ul>   
        <div className='navbar-btns'>
            <Link className='navbar-btn-signin' to="/">Sign In</Link>
            <Link className='navbar-btn-register' to="/">Register</Link>
        </div>

        {/* MOBILE */}
        <div className="mobile-hamb" onClick={openNav}>
          <FaListUl width={30} height={30} />
        </div>
      </div>
    </nav>
  )

}

export default Navbar