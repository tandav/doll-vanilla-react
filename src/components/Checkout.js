import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
         <input type="text" placeholder="Адрес" /><br/> 
         <input type="text" placeholder="Город" /><br/> 
         <input type="tel" placeholder="Телефон" /><br/> 
         <input type="number" placeholder="Индекс" /><br/> 
         <input type="text" placeholder="Имя" /><br/> 
         <input type="number" placeholder="Кредитная карта" /><br/> 
         <input type="email" placeholder="email" /><br/> 
      </div>
    );
  }
}

export default Checkout;
