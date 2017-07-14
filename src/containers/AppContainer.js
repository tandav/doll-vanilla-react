import React, { Component } from 'react';
import products_json_from_file from '../products.json';
import App from '../App'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // const url = 'https://gist.githubusercontent.com/anonymous/2ab2b034ccb396579f51c021a098bde1/raw/77e863caeaf20d39e14c6907a7b5b8900acbbca9/products.json'
    // fetch(url)
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       products: json
    //       });
    //   });
    this.setState({products: products_json_from_file});
  }

  render() {
    if (!this.state.products) {
      return <h1>Loading...</h1>
    }
    return <App products={this.state.products} />;
  }
}

export default AppContainer;
