
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (

    <div className="bg-cart intro" style={{ height: '100vh' }}>
    <h1>CART</h1>
    <Link to="/e-shop">Go Back</Link>
    </div>
  );
};

export default Cart;
