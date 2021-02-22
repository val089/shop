import React from 'react';
import Logo from '../Logo';
import Cart from '../containers/Cart';
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
                <Cart />
            </div>
        </header>
    );
};

export default Header;