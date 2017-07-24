import React, { Component } from 'react';
import '../styles/CartButton.css';

class CartButton extends Component {
  render() {
    return (
    <div>
      <button className="cart-button">
      Корзина {this.props.totalPrice}
    </button> 
    </div>
    );
  }
}

export default CartButton;

