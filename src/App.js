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
        priceFrom: '',
        priceTo: '',
        isSale: false,
        LG_check: false,
        Philips_check: false,
        Samsung_check: false,
        diagFrom: '',
        diagTo: '',
        _4k_check: false,
        _1080p_check: false,
        _1080i_check: false,
        _720p_check: false
      }
    }
  }

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/anonymous/a7308e8584e8aa6a7dac5ab20eac0c87/raw/37d7fbb1a8f458648e2c7034e53c398f0c1eb30c/data.json'
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

  filterProductList = (event) => {
    // this is from react docs https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    // this.setState({filterparams[name]: value})
    this.setState((prevState) => {
      prevState.filterparams[name] = value
      return prevState
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
            allProducts={this.state.allProducts} 
            addItem={this.handleAddItem}
          />    
          <Filter filterProductList = {this.filterProductList} />
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
