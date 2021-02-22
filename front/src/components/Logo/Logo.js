import React from 'react';
import './Logo.scss';

const Logo = ({ image, text }) => {
    return(
        <div className="logo">
            <img className="logo__img" src={image} alt="logo" />
            <h1 className="logo__text">{text}</h1>
        </div>
    );
};

Logo.defaultProps = {
    text: 'Logo'
};

export default Logo;