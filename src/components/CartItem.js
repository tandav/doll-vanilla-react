import React, { Component } from 'react';
import '../styles/CartItem.css';

class CartItem extends Component {
  render() {
    return (
      <div className="CartItem">
        <img src={this.props.specs.imgage_url} alt="TV"/>
        <ul className="ProductSpecs">
          <li>{this.props.specs.name}</li>
          <li>Диагональ: {this.props.specs.diagonal}</li>
          <li>Разрешение: {this.props.specs.resolution}</li>
          <li>HDMI-порты: {this.props.specs.hdmi_ports}</li>
          <li>USB-порты: {this.props.specs.usb_ports}</li>
        </ul>
        <h1>{this.props.specs.quantity_to_by} шт</h1>
        <button
          onClick={() => this.props.deleteItem(this.props.specs["id"])}>
          Удалить 
          <br/>
        </button>
      </div>
    );
  }
}

export default CartItem;
