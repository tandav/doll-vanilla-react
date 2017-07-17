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
      allProducts: {},
      toBuyInfo: {},
      toBuyItems: [],
      totalPrice: 0
    }
  }

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/anonymous/a7308e8584e8aa6a7dac5ab20eac0c87/raw/37d7fbb1a8f458648e2c7034e53c398f0c1eb30c/data.json'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState((prevState) => {
          return {
            productList: json,
            toBuyInfo: prevState.toBuyInfo,
            toBuyItems: prevState.toBuyItems
          }
        })
      })
    // this.setState({productList: products_json_from_file}); // TODO: add toBuy
  }

  handleAddItem = (id) => {
    // SHITTY CODE START
    // let toBuy_temp = this.state.toBuy
    // let added_product = this.state.productList.filter(product => product["id"] === id)[0]
    // toBuy_temp.push(added_product)
    // SHITTY CODE END

    this.setState((prevState) => {
      const id_index = prevState.productList.findIndex(product => product.id === id)
      prevState.productList[id_index].sale_items -= 1

      if (!prevState.toBuyInfo[id]) {
        prevState.toBuyInfo[id] = 1
      }
      else {
        prevState.toBuyInfo[id] += 1
      }

      let totalPrice = 0
      const temp_cart_products = Object.keys(prevState.toBuyInfo).map(x => {
        let temp = prevState.productList.filter(product => product["id"] == x)[0]
        temp["quantity_to_by"] = prevState.toBuyInfo[x]
        totalPrice += temp["quantity_to_by"] * temp["price"]
        return temp
      })
      
      return {
        // productList: prevState.productList,
        // toBuyInfo: prevState.toBuyInfo
        toBuyItems: temp_cart_products,
        totalPrice: totalPrice
      };
    });
  }

  filterProductList = (filterparams) => {
    return 0
  }

  render() {
    if (!this.state.productList) {
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
            allProducts={this.state.productList}
            addItem={this.handleAddItem}
          />    
          <Filter filterProductList = {this.filterProductList} />
          <Cart
            items_to_buy={this.state.toBuyItems}
            totalPrice={this.state.totalPrice}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
