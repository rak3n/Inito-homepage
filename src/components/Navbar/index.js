import React from 'react';
import Image from '../Image';

import './style.css';

const Navbar = () => {

    // Common JSX for NavOptions, HamburgerMenu and Inito Logo
    const NavOptionsJsx = (<>
        <a class="font-semi-bold text-dtheme" href="https://www.inito.com/about-us">About Us</a>
        <a class="font-semi-bold text-dtheme" href="https://blog.inito.com/">Blog</a>
        <a class="font-semi-bold text-dtheme" href="https://www.inito.com/faqs">FAQ</a>
        <a class="font-semi-bold text-dtheme" href="https://www.inito.com/contact-us">Contact Us</a>
        <a class="font-semi-bold text-dtheme" href="https://www.inito.com/careers">Careers</a></>
    );
    const HamburgerMenuJsx = (
        <div class="ham-menu" id="mobile-ham-menu">
            <div class="line-con">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    );
    const InitoLogoJsx = (
        <div class="logo">
            <a href="https://www.inito.com/">
                <Image type="icons" alt="Inito Logo" src="Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg" />
            </a>
        </div>
    );

    // render the navbar
    return (
        <>
            <header class="desktop-header">
                <div class="header__con">
                    {HamburgerMenuJsx}
                    {InitoLogoJsx}
                    <nav>
                        {NavOptionsJsx}
                        <a class="button" id="order-now-menu" href="https://www.inito.com/buy-now">Try Inito</a>
                    </nav>
                </div>
            </header>
            <div class="sidebar" id="mobile-sidebar">
                <nav>
                    {NavOptionsJsx}
                </nav>
            </div>
        </>
    );
}

export default Navbar;
