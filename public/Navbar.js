import React, { useState } from "react";
import logo from '../images/logo.png'
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => setMenu(!menu);
    const closeMenu = () => setMenu(false)
    return(
        <div className="navbar">
            <div className="navbar__container">
                
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="navbar__menu" onClick={handleClick}>
                    <i className={menu ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} />
                </div>

                <ul className= {menu ? 'navbar__list active' : "navbar__list"}>
                    <li className="navbar__item" ><a href="/#"><Link onClick={closeMenu} activeClass="active" to="home" spy={true} duration={500}>Home</Link></a></li>
                    <li className="navbar__item" ><a href="/#"><Link onClick={closeMenu} activeClass="active" to="categories" spy={true} duration={500}>Categories</Link></a></li>
                    <li className="navbar__item" ><a href="/#"><Link onClick={closeMenu} activeClass="active" to="citys" spy={true} duration={500}>Citys</Link></a></li>
                    <li className="navbar__item" ><a href="/#"><Link onClick={closeMenu} activeClass="active" to="contact" spy={true} duration={500}>Contact</Link></a></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;