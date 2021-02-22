import React from 'react';
import './Book.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/redux';

const Book = ({ data, addToCart }) => {

    const convertedPrice = (price) => {
        const newPrice = price/100;
        return newPrice.toFixed(2);
    };

    return(
        <div className="book">
            <div className="book__img-container">
                <img className="book__img" src={data.cover_url} alt="single book" />
            </div>
            <p className="book__pages">Liczba stron: {data.pages}</p>
            <h2 className="book__title">{data.title}</h2>
            <p className="book__author">{data.author}</p>
            <div className="book__price-container">
                <p className="book__price">{convertedPrice(data.price)} {data.currency}</p>
            </div>
            <Button onClick={() => addToCart(data.id)} label="DODAJ DO KOSZYKA" />
        </div>
    );
};

Book.propTypes = {
    data: PropTypes.shape ({
      id: PropTypes.number.isRequired,
      pages: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  };

  const mapDispatchToProps = {
    addToCart
};

  export default connect(null, mapDispatchToProps)(Book);