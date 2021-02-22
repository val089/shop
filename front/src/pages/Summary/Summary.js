import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Summary.scss';
import Form from '../../components/Form';

const Summary = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const convertedPrice = (price) => {
        const newPrice = price/100;
        return newPrice.toFixed(2);
    };

    useEffect(() => {
        let price = 0;
        cart.map(item => {
            return price = price + item.qty * item.price;
        });
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    return(
        <section className="summary">
            <div className="summary__total">
                <h3 className="summary__total-price">Wartość zamówenia: {convertedPrice(totalPrice)} PLN</h3>
            </div>
            <Form />
        </section>
    );
};

const mapStateToProps = (state) => ({
    cart: state.shop.cart
});

export default connect(mapStateToProps)(Summary);