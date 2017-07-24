import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div> {
        this.props.products.map(x => <ProductItem
          key={x.id}
          specs={x}
          addItem={this.props.addItem} />)
      }
      </div>
    );
  }
}

export default ProductList;
