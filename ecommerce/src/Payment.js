import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';

import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (e) => {
        // all the fancy stripe stuff...
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
                            <CardElement />
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
