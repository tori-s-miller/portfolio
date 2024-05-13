import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-list">
                <a
                    href="https://github.com/tori-s-miller"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link">
                    Github
                </a>
                <Link to="/portfolio" className="footer-link">Portfolio</Link>
                <Link to="/about" className="footer-link">About</Link>
            </ul>
        </div>
    )
}

export default Footer;