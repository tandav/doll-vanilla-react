import React, { Component } from 'react';
import List from './List';
import Filter from './Filter';
import './ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <List products={this.props.products}/>
        <Filter />
      </div>
    );
  }
}

export default ProductList;

// x.filter(product => product["id"] == 2)