import React, { Component } from 'react';
import '../styles/ProductItem.css';

class ProductItem extends Component {
  render() {
    const not_sale = {
      color: 'red',
    };

    let is_sale
    if (this.props.specs["sale_items"]) {
      is_sale = <div className="AddToCart">
                  <span>В наличии: {this.props.specs["sale_items"]} шт.</span>
                  <button
                    onClick={() => this.props.addItem(this.props.specs["id"])}>
                    В корзину: 
                    <br/>
                  </button>
                  {this.props.specs.price} руб.
                </div>
    }
    else {
      is_sale = <div className="AddToCart">
        <span style={not_sale}>Нет в наличии</span>
        {this.props.specs.price} руб.
      </div>
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
        {is_sale}
      </div>
    );
  }
}

export default ProductItem;
