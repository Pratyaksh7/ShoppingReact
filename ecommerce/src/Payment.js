import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';

import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal } from './reducer';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        // all the fancy stripe stuff...
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__conatainer">

                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

                {/* Payment Section - 'delivery address' */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Xyz lane react</p>
                        <p>India south Pacific</p>
                    </div>
                </div>

                {/* Payment Section - 'review items' */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item)=>{
                            return (
                                <CheckoutProduct
                                id={item.id} 
                                rating={item.rating}
                                price={item.price} 
                                title={item.title}
                                image={item.image}
                                 />
                            )
                        })}
                    </div>
                </div>

                {/* Payment Section - 'payment method' */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Magic will go here  */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
