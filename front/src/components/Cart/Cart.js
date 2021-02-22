import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';

function Cart() {
    return(
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart__icon" />
            <span className="cart__counter">0</span>
        </div>
    );
}


export default Cart;