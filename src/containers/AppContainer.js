import React, { Component } from 'react';
import products_json_from_file from '../products.json';
import App from '../App'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/anonymous/a7308e8584e8aa6a7dac5ab20eac0c87/raw/37d7fbb1a8f458648e2c7034e53c398f0c1eb30c/data.json'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          products: json
          });
      });
    // this.setState({products: products_json_from_file});
  }

  render() {
    if (!this.state.products) {
      return <h1>Loading...</h1>
    }
    return <App products={this.state.products} />;
  }
}

export default AppContainer;
