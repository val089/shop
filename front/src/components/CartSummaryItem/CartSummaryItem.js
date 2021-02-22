import React from 'react';
import './CartSummaryItem.scss';
import Button from '../../components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/redux';

const CartSummaryItem = ({ item, removeFromCart }) => {

    const MAX_TEXT_LENGTH = 20;

    const convertedPrice = (price) => {
        const newPrice = price/100;
        return newPrice.toFixed(2);
    };

    return(
        <div className="cart-summary-item">
            <img className="cart-summary-item__img" src={item.cover_url} alt="book cover" />
            <h4 className="cart-summary-item__title">
                {`${item.title.slice(0, MAX_TEXT_LENGTH)}...`}
            </h4>
            <p className="cart-summary-item__quantity">x {item.qty} </p>
            <p className="cart-summary-item__price">{convertedPrice(item.price)} {item.currency}</p>
            <Button label="USUŃ" onClick={() => removeFromCart(item.id)} />
        </div>
    );
};

CartSummaryItem.propTypes = {
    item: PropTypes.shape ({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  };

const mapDispatchToProps = {
    removeFromCart
};

const mapStateToProps = (state) => ({
    removeFromCart
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSummaryItem);