import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';

import { connect } from 'react-redux';

function Cart({ cart }) {
    return(
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart__icon" />
            <span className="cart__counter">{cart.length}</span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
});

export default connect(mapStateToProps)(Cart);