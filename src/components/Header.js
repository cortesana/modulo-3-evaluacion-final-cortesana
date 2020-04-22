import React from 'react'
import logo from '../images/logo.png';

function Header() {
    return (
        <div className="Header-ctn">
            <header className="Header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default Header;