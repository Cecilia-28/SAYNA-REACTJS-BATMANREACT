import React from "react";
import iconWB from '../assets/images/Logos/icon_WB.png';
import logoSayna from '../assets/images/Logos/logo_sayna_white.png';
import iconX from '../assets/images/Logos/icon_x.png';
import iconDC from '../assets/images/Logos/icon_DC.png';
import iconFB from '../assets/images/Logos/icon_facebook.png';
import iconIG from '../assets/images/Logos/icon_ig.png';
import iconTW from '../assets/images/Logos/icon_tw.png';


const Footer = () => {
    return ( 
        // <!-- Footer, les copyrigth etc... Pas trop compliquer du gateaux -->
    <footer class="hidemay">
        <div class="copyright">
            <p class="copyright">
                <img src={iconWB} alt=""/>
                Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves.
            </p>
        </div>
        <div class="credit hidemay">
            <div class="biglogo">
                <img src={logoSayna} alt=""/>
            </div>
            <div class="smallicons">
                <img src={iconX} alt=""/>
            </div>
            <div class="biglogo">
                <img src={iconDC} alt=""/>
            </div>
            <div class="smallicons">
                <img src={iconFB} alt=""/>
            </div>
            <div class="smallicons">
                <img src={iconIG} alt=""/>
            </div>
            <div class="smallicons">
                <img src={iconTW} alt=""/>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;