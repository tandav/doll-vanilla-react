import React, { Component } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
// import Cart from './Cart';

class Home extends Component {
  render() {
    return (
      <div className="Main-section">
        <ProductList
          products={this.props.data.toShowProducts} 
          addItem={this.props.handleAddItem}
        />
        <Filter 
          updateFilterParams={this.props.updateFilterParams}
          updateSortParams={this.props.updateSortParams}
          sortparams={this.props.data.sortparams}
          isSale={this.props.data.filterparams.isSale}
          LG_check={this.props.data.filterparams.LG_check}
          Philips_check={this.props.data.filterparams.Philips_check}
          Samsung_check={this.props.data.filterparams.Samsung_check}
          _4k_check={this.props.data.filterparams._4k_check}
          _1080p_check={this.props.data.filterparams._1080p_check}
          _1080i_check={this.props.data.filterparams._1080i_check}
          _720p_check={this.props.data.filterparams._720p_check}
        />
        {/* <Cart 
          items_to_buy={this.props.data.toBuyProducts} 
          totalPrice={this.props.data.totalPrice}
        /> */}
      </div>
    );
  }
}

export default Home;

