import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';

import { connect } from 'react-redux';
import SubCart from '../../SubCart';

function Cart({ cart }) {

    const style = {
        display: cart.length > 0 ? 'flex' : 'none'
    };

    return(
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart__icon" />
            <span className="cart__counter" style={style}>{cart.length}</span>
            <SubCart data={cart} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
});

export default connect(mapStateToProps)(Cart);