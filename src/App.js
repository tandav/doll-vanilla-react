import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Filter from './components/Filter';
// import products_json_from_file from './products.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      toShowProducts: [],
      toBuyInfo: {},
      toBuyProducts: [],
      totalPrice: 0,
      filterparams: {
        priceFrom: '0',
        priceTo: '1000000',
        isSale: false,
        LG_check: true,
        Philips_check: true,
        Samsung_check: true,
        diagFrom: '0',
        diagTo: '1000000',
        _4k_check: true,
        _1080p_check: true,
        _1080i_check: true,
        _720p_check: true
      }
    }
  }

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/tandav/a9186059383d5993819091db900c88ba/raw/15eb60da0ef2025456c05919db4be432045fdea4/products.json'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState((prevState) => {
          return {
            allProducts: json,
            toBuyInfo: prevState.toBuyInfo,
            toBuyProducts: prevState.toBuyProducts
          }
        })
      })
      .then(() => this.filterProducts())
    // this.setState({productList: products_json_from_file}); // TODO: add toBuy
  }

  handleAddItem = (id) => {
    this.setState((prevState) => {
      const id_index = prevState.allProducts.findIndex(product => product.id === id)
      prevState.allProducts[id_index].sale_items -= 1

      if (!prevState.toBuyInfo[id]) {
        prevState.toBuyInfo[id] = 1
      }
      else {
        prevState.toBuyInfo[id] += 1
      }

      let totalPrice = 0
      const temp_cart_products = Object.keys(prevState.toBuyInfo).map(x => {
        let temp = prevState.allProducts.filter(product => product["id"] == x)[0]
        temp["quantity_to_by"] = prevState.toBuyInfo[x]
        totalPrice += temp["quantity_to_by"] * temp["price"]
        return temp
      })
      
      return {
        // productList: prevState.productList,
        // toBuyInfo: prevState.toBuyInfo
        toBuyProducts: temp_cart_products,
        totalPrice: totalPrice
      };
    });
  }

  updateFilterParams = (event) => {
    // this is from react docs https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs
    const target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    // hardcode ??
    if (value === '') {
      switch (name) {
        case 'priceFrom':
          value = '0'
          break
        case 'priceTo':
          value = '1000000' 
          break
        case 'diagFrom':
          value = '0'
          break
        case 'diagTo':
          value = '0'
          break
      }
    }

    this.setState((prevState) => {
      prevState.filterparams[name] = value
      // prevState.toShowProducts = filtered
      return prevState
    }, this.filterProducts)
  }

  filterProducts = () => {
    this.setState({
      toShowProducts: this.state.allProducts.filter((p) => {
        if ( !(p.price >= parseInt(this.state.filterparams.priceFrom, 10) && p.price <= parseInt(this.state.filterparams.priceTo, 10)) )
          return false
        if (p.sale_items === 0 && this.state.filterparams.isSale === true)
          return false
        if (!(p.diagonal >= parseInt(this.state.filterparams.diagFrom, 10) && p.diagonal <= parseInt(this.state.filterparams.diagTo, 10)) )
          return false
        if (p.brand === 'LG' && this.state.filterparams.LG_check === false)
          return false
        if (p.brand === 'Philips' && this.state.filterparams.Philips_check === false)
          return false
        if (p.brand === 'Samsung' && this.state.filterparams.Samsung_check === false)
          return false
        if (p.resolution === '4K' && this.state.filterparams._4k_check === false)
          return false
        if (p.resolution === '1080p' && this.state.filterparams._1080p_check === false)
          return false
        if (p.resolution === '1080i' && this.state.filterparams._1080i_check === false)
          return false
        if (p.resolution === '720p' && this.state.filterparams._720p_check === false)
          return false
        return true
      })
    })
  }

  render() {
    if (!this.state.allProducts) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TV Store</h2>
        </div>
        <div className="Main-section">
          <ProductList
            products={this.state.toShowProducts} 
            addItem={this.handleAddItem}
          />    
          <Filter updateFilterParams = {this.updateFilterParams}
            isSale={this.state.filterparams.isSale}
            LG_check={this.state.filterparams.LG_check}
            Philips_check={this.state.filterparams.Philips_check}
            Samsung_check={this.state.filterparams.Samsung_check}
            _4k_check={this.state.filterparams._4k_check}
            _1080p_check={this.state.filterparams._1080p_check}
            _1080i_check={this.state.filterparams._1080i_check}
            _720p_check={this.state.filterparams._720p_check}
          />
          <Cart 
            items_to_buy={this.state.toBuyProducts} 
            totalPrice={this.state.totalPrice}
          />
        </div>
      </div>
    );
  }
}

export default App;
