import React, { Component } from 'react';
import '../styles/Checkout.css';

class Checkout extends Component {
  render() {
    return (
      <form className="checkOutForm">
         <input type="text" placeholder="Адрес" /><br/> 
         <input type="text" placeholder="Город" /><br/> 
         <input type="tel" placeholder="Телефон" /><br/> 
         <input type="number" placeholder="Индекс" /><br/> 
         <input type="text" placeholder="Имя" /><br/> 
         <input type="number" placeholder="Кредитная карта" /><br/> 
         <input type="email" placeholder="email" /><br/> 
      </form>
    );
  }
}

export default Checkout;
