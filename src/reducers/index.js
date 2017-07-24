export default (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FROM_API': {
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
      .then(() => {
        // this.filterProducts() // USE REDUCERS
        // this.sortProducts()   // USE REDUCERS
      })
    // this.setState({productList: products_json_from_file}); // TODO: add toBuy
    return state + 1
  }
    // case 'FILTER':
      // return state - 1
    default:
      return state
  }
}