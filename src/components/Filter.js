import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   priceFrom: undefined,
  //   priceTo: undefined,
  // };
  // }

  render() {
    return (
      <form className="Filter">
        <label> 
          Цена:
          <input type="text" name="price_from" placeholder="от" value={this.state.priceFrom} onChange={this.props.filterProductList(this.state)}/>
          <input type="text" name="price_to" placeholder="до"/>
        </label>
        <hr/>
        
        <label>
          <input type="checkbox"/> В продаже
        </label>
        <hr/>

        <label>
          Производитель:<br/>
          <input type="checkbox"/> LG<br/>
          <input type="checkbox"/> Philips<br/>
          <input type="checkbox"/> Samsung<br/>
        </label>
        <hr/> 
      
        <label>
          Диагональ:
          <input type="text" name="diag_from" placeholder="от"/>
          <input type="text" name="diag_to" placeholder="до"/>
        </label>
        <hr/>

        <label>
          Разрешение:<br/>
          <input type="checkbox"/> 4K<br/>
          <input type="checkbox"/> 1080p<br/>
          <input type="checkbox"/> 1080i<br/>
          <input type="checkbox"/> 720p<br/>
        </label>
        <hr/> 
      </form>
    );
  }
}

export default Filter;
