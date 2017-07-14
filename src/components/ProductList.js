import React, { Component } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';


class ProductList extends Component {
  render() {
    return (
      <div className="List"> {
        this.props.products.map(x => <ProductItem
          key={x.id}
          specs={x}
          addItem={this.props.addItem}/>)
      }
      </div>
    );
  }
}

export default ProductList;
