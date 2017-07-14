import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
  render() {
    const not_sale = {
      color: 'red',
    };

    let is_sale
    if (this.props.specs["sale_items"]) {
      is_sale = <span>В продаже: {this.props.specs["sale_items"]} шт.</span>
    }
    else {
      is_sale = <span style={not_sale}>Нет в наличии</span>
    }

    return (
      <div className="ProductItem">
        <img src={this.props.specs.imgage_url} alt="TV"/>
        <ul className="ProductSpecs">
          <li>{this.props.specs.name}</li>
          <li>Диагональ: {this.props.specs.diagonal}</li>
          <li>Разрешение: {this.props.specs.resolution}</li>
          <li>HDMI-порты: {this.props.specs.hdmi_ports}</li>
          <li>USB-порты: {this.props.specs.usb_ports}</li>
        </ul>
        <div className="AddToCart">
          {is_sale}
        <button>В корзину: {this.props.specs.price} руб.</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
