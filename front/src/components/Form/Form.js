import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Form.scss';

const Form = ({ cart }) => {
    const {register, handleSubmit, errors } = useForm();
    const [successInfo, setSuccessInfo] = useState(false);

    const onSubmit = ({ first_name, last_name, city, zip_code }, event) => {
        axios.post('http://localhost:3001/api/order/', {
            order: cart.map(item => {
                return {id: item.id, quantity: item.qty};
            }),
            first_name,
            last_name,
            city,
            zip_code
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        event.target.reset();
        setSuccessInfo(true);
    };

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {successInfo && <p className="form__info">Produkt został zamówiony</p>}
            <div className="form__group">
                <label className="form__label" htmlFor="first_name">Imię:</label>
                <input className="form__input" type="text" id="first_name" name="first_name" ref={register({ required: true })} />
                {errors.first_name && <p className="form__error">Podaj imię</p>}
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="last_name">Nazwisko:</label>
                <input className="form__input" type="text" id="last_name" name="last_name" ref={register({ required: true })} />
                {errors.last_name && <p className="form__error">Podaj nazwisko</p>}
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="city">Miejscowość</label>
                <input className="form__input" type="text" id="city" name="city" ref={register({ required: true })} />
                {errors.city && <p className="form__error">Podaj miejscowość</p>}
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="zip_code">Kod pocztowy</label>
                <input className="form__input" type="text" id="zip_code" name="zip_code" pattern="([0-9]{2})(-[0-9]{3})" ref={register({ required: true })} />
                {errors.zip_code && <p className="form__error">Podaj kod pocztowy</p>}
            </div>
            <div className="form__group form__group--flex">
                <Link to="/cart">
                    <Button label="WRÓC DO KOSZYKA" />
                </Link>
                <Button label="ZAMAWIAM i PŁACĘ" type="submit" />
            </div>
        </form>
  );
};

const mapStateToProps = (state) => ({
    cart: state.shop.cart
});

export default connect(mapStateToProps)(Form);