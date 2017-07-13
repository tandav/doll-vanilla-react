import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Магазин телевизоров</h2>
        </div>
        <div className="Main-section">
            <ProductList products={this.props.products} />       
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
