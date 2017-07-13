import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <ul>
          {this.props.products.map(x => 
            <li key={x.id}>
              <img src={x.imgage_url} alt="TV"/>
              <ul>
                <li>{x.name}</li>
                <li>{x.price}</li>
                <li>{x.diagonal}</li>
                <li>{x.resolution}</li>
                <li>{x.hdmi_ports}</li>
                <li>{x.usb_ports}</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ProductList;
