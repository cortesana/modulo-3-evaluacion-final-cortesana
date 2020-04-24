import React from 'react'
import logo from '../images/logo.png';

function Header() {
    return (
        <div className="Header-ctn">
            <header className="Header">
                <div className="Header-logo-ctn">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
            </header>
        </div>
    );
}

export default Header;