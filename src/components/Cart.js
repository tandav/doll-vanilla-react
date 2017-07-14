import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
    <div className="Cart">
      <h1>Корзина:</h1>
      {this.props.items_to_buy}
    </div>
    );
  }
}

export default Cart;
