import React from 'react';
import Logo from '../Logo';
import './Header.scss';
import logo from '../../images/logo.png';

const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <Logo
                    image={logo}
                    text="Shop.pl"
                />
            </div>
        </header>
    );
};

export default Header;