import React from 'react';
import './Footer.css';

function Footer() {
    return (

        <>
            <footer className='footer'>
                <div className='footer__container'>
                    <div className='footer__item' style={{}}>
                        <h3>About Us</h3>
                        <p>Nous sommes PolyRedac, une agence de rédaction de contenu à service complet qui se consacre à à vous offrir une qualité de contenu inégalée.</p>
                        <p>Address:
                            77 Camden Street Lower
                            DUBLIN, D02 XE80
                            IRELAND</p>
                        <p>Tél : +33756862606</p>
                        <p>Email: hello@polyredac.fr</p>
                    </div>
                    <div className='footer__item'>
                        <h3>Services</h3>
                        <ul>
                            <li>Branding</li>
                            <li>Web Design</li>
                            <li>Social Media Management</li>
                            <li>SEO</li>
                            <li>Email Marketing</li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <h3>Recent Posts</h3>
                        <ul>
                            <li>How to Improve Your Brand's Social Media Presence</li>
                            <li>The Importance of SEO for Small Businesses</li>
                            <li>The Benefits of Responsive Web Design</li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Twitter</a></li>
                            <li><a href='#'>Instagram</a></li>
                        </ul>
                    </div>
                </div>

            </footer>
            <div className='footer__bottom'>
                <p>&copy; 2023 PolyRedac. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;
