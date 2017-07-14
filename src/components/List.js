import React, { Component } from 'react';
// import './List.css';
import ProductItem from './ProductItem';

class List extends Component {
  render() {
    return (
      <div className="List"> {
        this.props.products.map(x => <ProductItem key={x.id} specs={x}/>)
      }
      </div>
    );
  }
}

export default List;
