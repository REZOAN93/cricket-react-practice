import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    const total=cart.reduce((total,prd)=>Number(total)+Number(prd.salary),0).toFixed(2);
    return (
        <div className='cart-part'>
            <h2>Selected Players</h2>
            <h2>Total Salary: {total}</h2>
            {cart.map(cr=><li>{cr.name}</li>)}
        </div>
    );
};

export default Cart;