import React from 'react';
import './SubCartItem.scss';

const SubCartItem = ({ item }) => {

    const convertedPrice = (price) => {
        const newPrice = price/100;
        return newPrice.toFixed(2);
    };

    const MAX_TEXT_LENGTH = 20;

    return(
        <div className="subcart-item">
            <img className="subcart-item__img" src={item.cover_url} alt="book cover" />
            <h4 className="subcart-item__title">
                {`${item.title.slice(0, MAX_TEXT_LENGTH)}...`}
            </h4>
            <p className="subcart-item__quantity">x {item.qty} </p>
            <p className="subcart-item__price">{convertedPrice(item.price)} {item.currency}</p>
        </div>
    );
};

export default SubCartItem;