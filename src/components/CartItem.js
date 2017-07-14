import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  render() {
    console.log(this.props)
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
      </div>
    );
  }
}

export default CartItem;
