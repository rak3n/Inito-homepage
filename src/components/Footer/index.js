import React from 'react';
import Image from '../Image';

import './style.css';

const Footer = () => {
    return <>
        <div class="pdg-superscript v2">
            <p>1. Inito measures PdG, a metabolite of progesterone. Progesterone &amp; PdG are proven to be correlated. Roos J, Johnson S, Weddell S, et al. Monitoring the menstrual cycle: Comparison of urinary and serum reproductive hormones referenced to true ovulation. Eur J Contracept Reprod Heal Care 2015</p>
        </div>

        {/* Desktop footer */}
        <footer>
            <div class="links-con">
                <ul>
                    <li class="head">Company</li>
                    <li>
                        <a href="https://www.inito.com/about-us">About Us</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/careers">Careers</a>
                    </li>
                    <li>
                        <a id="footer-order-now" href="https://www.inito.com/buy-now">Buy Now</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/contact-us">Contact Us</a>
                    </li>
                </ul>
                <ul>
                    <li class="head">Support</li>
                    <li>
                        <a href="https://www.inito.com/faqs">FAQ</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/terms">Terms</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/replacements-and-warranty">Returns &amp; Warranty</a>
                    </li>
                    <li>
                        <a href="https://www.inito.com/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a>
                    </li>
                </ul>
                <ul>
                    <li class="head">Get In Touch</li>
                    <li><a href="tel:+91-9742931931" target="_blank" rel="noreferrer">
                        +91-9742931931
                    </a></li>
                    <li><a href="mailto:help@inito.com" target="_blank" rel="noreferrer">help@inito.com</a></li>
                    <li>
                        2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN
                    </li>
                </ul>

                {/* Mobile footer */}
                <div class="collapsible" id="mobile-footer-links">
                    <div class="item">
                        <div class="head">
                            <h5 class="title">Company</h5>
                            <Image type="images" src="Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" />
                        </div>
                        <div class="body">
                            <a href="https://www.inito.com/about-us">About Us</a>
                            <a href="https://www.inito.com/careers">Careers</a>
                            <a href="https://www.inito.com/buy-now">Buy Now</a>
                            <a href="https://www.inito.com/contact-us">Contact Us</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <h5 class="title">Support</h5>
                            <Image type="images" src="Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" />
                        </div>
                        <div class="body">
                            <a href="https://www.inito.com/faqs">FAQ</a>
                            <a href="https://www.inito.com/terms">Terms</a>
                            <a href="https://www.inito.com/privacy-policy">Privacy Policy</a>
                            <a href="https://www.inito.com/replacements-and-warranty">Returns &amp; Warranty</a>
                            <a href="https://www.inito.com/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <h5 class="title">Get In Touch</h5>
                            <Image type="images" src="Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" />
                        </div>
                        <div class="body">
                            <a href="tel:+91-9742931931" target="_blank" rel="noreferrer">+91-9742931931</a>
                            <a href="mailto:help@inito.com" target="_blank" rel="noreferrer">help@inito.com</a>
                            <li>
                                2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN
                            </li>
                        </div>
                    </div>
                </div>
                <div class="social-icon-dark">
                    <a href="https://www.facebook.com/groups/initofertility" target="_blank" rel="noreferrer">
                        <Image type="images" src="Facebook - Negative.png" />
                    </a>
                    <a href="https://www.instagram.com/initofertility" target="_blank" rel="noreferrer">
                        <Image type="images" src="Instagram - Negative.png" />
                    </a>
                    <a href="https://www.linkedin.com/company/initoinc" target="_blank" rel="noreferrer">
                        <Image type="images" src="LinkedIn - Negative.png" />
                    </a>
                    <a href="https://www.youtube.com/@Inito" target="_blank" rel="noreferrer">
                        <Image type="images" src="YouTube - Negative.png" />
                    </a>
                </div>
            </div>
            <div class="bottom-bar">
                <div class="bottom-bar-inner-con">
                    <Image type="icons" src="Logo Inito Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg" />
                    <p class="font-med">Copyright 2024.
                        Samplytics Technologies Private Limited.
                        All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </>
};

export default Footer;
