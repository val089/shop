import React from 'react';
import './Book.scss';
import PropTypes from 'prop-types';

const Book = ({ data }) => {
    return(
        <div className="book">
            <div className="book__img-container">
                <img className="book__img" src={data.cover_url} alt="single book" />
            </div>
            <p className="book__pages">Liczba stron: {data.pages}</p>
            <h2 className="book__title">{data.title}</h2>
            <p className="book__author">{data.author}</p>
            <div className="book__price-container">
                <p className="book__price">{data.price} {data.currency}</p>
            </div>
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

export default Book;