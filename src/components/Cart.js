import React, { Component } from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css'

class Cart extends Component {
  render() {
    let cartItems
    if (this.props.items_to_buy) 
      cartItems = <div> {
        this.props.items_to_buy.map(x => <CartItem
          key={x.id}
          specs={x} />
        )
      } </div>
        
    return (
    <div className="Cart">
      <h1>Корзина: {this.props.totalPrice} руб.</h1>
       {cartItems} 
    </div>
    )
  }
}

export default Cart;
