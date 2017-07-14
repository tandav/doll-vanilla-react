import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.products.map(x => 
            <li key={x.id} className="ProductItem">
              <img src={x.imgage_url} alt="TV"/>
              <ul className="ProductSpecs">
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

export default List;
