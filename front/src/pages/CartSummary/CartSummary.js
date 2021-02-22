import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CartSummary.scss';
import CartSummaryItem from '../../components/CartSummaryItem';
import Button from '../../components/Button';

const CartSummary = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    useEffect(() => {
        let price = 0;
        cart.map(item => {
            return price = price + item.qty * item.price;
        });
        setTotalPrice(price);

        cart.length > 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);

    }, [cart, totalPrice, setTotalPrice]);

    return(
        <div className="cart-summary">
            <header className="cart-summary__header">
                <p className="cart-summary__title">Produkty</p>
            </header>
            <main className="cart-summary__products">
                {cart.length === 0 && <p className="cart-summary__info">Koszyk jest posty</p>}
                {cart.map(item => <CartSummaryItem key={item.id} item={item} />)}
            </main>
            <footer className="cart-summary__footer">
                <Link to="/">
                    <Button label="WRÓĆ DO SKLEPU" />
                </Link>
                <p className="cart-summary__total">SUMA: <span className="cart-summary__total-price">{totalPrice}</span> PLN</p>
                <Link to="/summary">
                    { isCartEmpty && <Button label="DALEJ" />}
                </Link>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.shop.cart
});

export default connect(mapStateToProps)(CartSummary);