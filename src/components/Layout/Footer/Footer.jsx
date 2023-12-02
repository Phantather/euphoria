import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import s from '../../../assets/s.svg'
import a from '../../../assets/a.svg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <nav className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h2 className="footer__title">
                                    Need Help
                                </h2>
                                <div className="footer__links">
                                    <a href="#" className="footer__link">
                                        Contact Us
                                    </a>
                                    <a href="#" className="footer__link">
                                        Track Order
                                    </a>
                                    <a href="#" className="footer__link">
                                        Returns & Refunds
                                    </a>
                                    <a href="#" className="footer__link">
                                        FAQ's
                                    </a>
                                    <a href="#" className="footer__link">
                                        Career
                                    </a>
                                </div>
                            </li>
                            <li className="footer__item">
                                <h2 className="footer__title">
                                    Company
                                </h2>
                                <div className="footer__links">
                                    <a href="#" className="footer__link">
                                        About Us
                                    </a>
                                    <a href="#" className="footer__link">
                                        euphoria Blog
                                    </a>
                                    <a href="#" className="footer__link">
                                        euphoriastan
                                    </a>
                                    <a href="#" className="footer__link">
                                        Collaboration
                                    </a>
                                    <a href="#" className="footer__link">
                                        Media
                                    </a>
                                </div>
                            </li>
                            <li className="footer__item">
                                <h2 className="footer__title">
                                    More Info
                                </h2>
                                <div className="footer__links">
                                    <a href="#" className="footer__link">
                                        Term and Conditions
                                    </a>
                                    <a href="#" className="footer__link">
                                        Privacy Policy
                                    </a>
                                    <a href="#" className="footer__link">
                                        Shipping Policy
                                    </a>
                                    <a href="#" className="footer__link">
                                        Sitemap
                                    </a>
                                </div>
                            </li>
                            <li className="footer__item">
                                <h2 className="footer__title">
                                    Location
                                </h2>
                                <div className="footer__links">
                                    <a href="#" className="footer__link">
                                        support@euphoria.in
                                    </a>
                                    <a href="#" className="footer__link">
                                        Eklingpura Chouraha, Ahmedabad Main Road
                                    </a>
                                    <a href="#" className="footer__link">
                                        (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="footer__social">
                           <div className="footer__social-icons">
                               <a href="#" className="footer__social-link">
                                   <FaFacebookF />
                               </a>
                               <a href="#" className="footer__social-link">
                                   <FaInstagram />
                               </a>
                               <a href="#" className="footer__social-link">
                                   <FaTwitter />
                               </a>
                               <a href="#" className="footer__social-link">
                                   <FaLinkedinIn />
                               </a>
                           </div>
                            <div className="footer__social-download">
                                <h3 className="footer__title">
                                    Download The App
                                </h3>
                                <div className="footer__social-app">
                                    <a href="">
                                        <img src={s} alt=""/>
                                    </a>
                                    <a href="">
                                        <img src={a} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <p className="footer__exp">
                        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;