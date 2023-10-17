import React from "react";
import { NavLink } from "react-router-dom";


// import homeLogo from '../assets/circle.svg'
import homeLogo from '../assets/images/Logos/logohome.png';
import homeLogoMobile from '../assets/batman-silhouette-svgrepo-com.svg';
import upArrow from '../assets/images/Logos/logo_bat_flèche.png';
import downArrow from '../assets/images/Logos/logo_bat_flèche_2.png';
import iconFB from '../assets/images/Logos/icon_facebook.png';
import iconIG from '../assets/images/Logos/icon_ig.png';
import iconTW from '../assets/images/Logos/icon_tw.png';

const Navbar = () => {
    return ( 
    <header>
        {/* line complement random... ahhhh... ces designer */}
        <div className="lines"></div>
        <div className="lines-ver"></div>
        <div className="lines-ver-2"></div>

        {/* partie header qui contiendra la barre de navigation */}

    
        <nav id="nav">
            <div className="mobile-menu">
                <div className="mobile-home"><img src={homeLogoMobile} alt="Logo Home"/></div>
                <div className="menu-burger">
                    <div className="line-burger"></div>
                    <div className="line-burger"></div>
                    <div className="line-burger"></div>
                </div>
            </div>
            <div className="nav-logo desktop"><img src={homeLogo} alt="Logo Home"/></div>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="home" className="links-home">HOME</NavLink></li>
                    <li><NavLink to="game" className="links-home">GAME</NavLink></li>
                    <li><NavLink to="e-shop" className="links-home">E-SHOP</NavLink></li>
                    <li><NavLink to="account" className="links-home">MON COMPTE</NavLink></li>
                </ul>
            </div>
        </nav>

        {/* ScrollBar */}
        <div class="scroll">
            <div class="up"><a href="#nav"><img src={upArrow} alt="down"/></a></div>
                <div class="mediasoc">
                        <div><img src={iconFB} alt=""/></div>
                        <div><img src={iconIG} alt=""/></div>
                        <div><img src={iconTW} alt=""/></div>
                </div>
            <div class="up down"><a href="#contact"><img src={downArrow} alt="up"/></a></div>
        </div>
    </header>
    );
}
 
export default Navbar;