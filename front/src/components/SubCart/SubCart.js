import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubCart.scss';
import Button from '../Button';
import SubCartItem from '../SubCartItem';

function SubCart({ data }) {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = 0;

        data.map(item => {
            return price = price + item.qty * item.price;
        });

        setTotalPrice(price);
    }, [data, totalPrice, setTotalPrice]);

    return(
        <div className="subcart">
            <header className="subcart__header">
                <h4 className="subcart__title">Produkty</h4>
            </header>
            <main className="subcart__products">
                {data.length === 0 && <p className="subcart__info">Koszyk jest posty</p>}
                {data.map(item => <SubCartItem key={item.id} item={item} />)}
            </main>
            <footer className="subcart__footer">
                <p className="subcart__total">SUMA: <span className="subcart__total-price">{totalPrice}</span> PLN</p>
                <Link to="/cart">
                    <Button label="PRZEJDŹ DO KOSZYKA" />
                </Link>
            </footer>
        </div>
    );
}

export default SubCart;