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
      toBuy: []
    }
  }

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/anonymous/a7308e8584e8aa6a7dac5ab20eac0c87/raw/37d7fbb1a8f458648e2c7034e53c398f0c1eb30c/data.json'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState((prevState) => {
          return {
            products: json,
            toBuy: prevState.toBuy
          }
        })
      })
    // this.setState({products: products_json_from_file}); // TODO: add toBuy
  }

  handleAddItem = (id) => {
    // SHITTY CODE START
    let toBuy_temp = this.state.toBuy
    let new_tv = this.state.products.filter(product => product["id"] === id)[0]
    toBuy_temp.push(new_tv)
    // SHITTY CODE END

    this.setState((prevState) => {
      const id_index = prevState.products.findIndex(product => product.id === id)
      prevState.products[id_index].sale_items -= 1
      return {
        products: prevState.products,
        toBuy: toBuy_temp
      };
    });
  }

  render() {
    if (!this.state.products) {
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
            products={this.state.products}
            addItem={this.handleAddItem}
          />    
          <Filter />
          <Cart items_to_buy={this.state.toBuy}/>
        </div>
      </div>
    );
  }
}

export default App;
