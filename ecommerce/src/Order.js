import React from 'react'
import './Order.css';
import { moment } from 'moment';
import CheckoutProduct from './CheckoutProduct';
import { CurrencyFormat } from 'react-currency-format';

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map((item)=>{
                return (
                    <CheckoutProduct 
                        id={item.id} 
                        rating={item.rating}
                        price={item.price} 
                        title={item.title}
                        image={item.image}
                        hideButton
                    />
                )
            })}
            <CurrencyFormat
                renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount /100} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
