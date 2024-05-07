import React from 'react';
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>About EduKids</h3>
                    <p>A platform to make learning fun for kids!</p>
                </div>
                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <p>Email: info@edukids.com</p>
                    <p>Phone: +1 123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EduKids Learning App. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
