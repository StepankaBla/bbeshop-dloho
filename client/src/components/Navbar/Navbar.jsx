import React from "react";
import { useRef, useState} from "react";
import { FaBars, FaSearch, FaStore, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  
  return (
    <div className="nav_container">
      <div className="logo-container">
        <img src="/img/logo2.png" alt="" height="100" />
        <div className="icon-container">
          <Link className=" icon" to="/products/1">
            <FaSearch />
          </Link>
          <Link className=" icon">
            <FaStore onClick={()=>setOpen(!open)}/>
            <span>{products.length}</span>
          </Link>
        </div>
      </div>
      <header>
        <nav ref={navRef}>
          <Link className="link" to="/" onClick={showNavbar}>
            home
          </Link>
          <Link className="link" to="/about" onClick={showNavbar}>
            about
          </Link>
          <Link className="link" to="/products/1" onClick={showNavbar}>
            painting
          </Link>

          <Link className="link" to="/contact" onClick={showNavbar}>
            contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
