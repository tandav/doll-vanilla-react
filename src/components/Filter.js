import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceFrom: '',
      priceTo: '',
      isSale: '',
      LG_check: '',
      Philips_check: '',
      Samsung_check: '',
      diagFrom: '',
      diagTo: '',
      _4k_check: '',
      _1080p_check: '',
      _1080i_check: '',
      _720p_check: ''

      // filterparams: {
      //   "price_from": undefined,
      //   "price_to": undefined,
      //   "is_sale": undefined,
      //   "LG_check": undefined,
      //   "Philips_check": undefined,
      //   "Samsung_check": undefined,
      //   "diag_from": undefined,
      //   "diag_to": undefined,
      //   "4k_check": undefined,
      //   "1080p_check": undefined,
      //   "1080i_check": undefined,
      //   "720p_check": undefined
      // }
    }
  }

  priceFrom_change = (event) => {
    // console.log(event.target.value)
    // console.log([event.target.name])
    // let ss =event.target.value
    this.setState({priceFrom: event.target.value})
    // console.log(this.state.priceFrom)
    // console.log(event.target.value)
    // console.log(typeof(this.state.priceFrom))
  }


  render() {
    return (
      <form className="Filter">
        <label> 
          Цена:
          <input type="number" name="price_from" placeholder="от" value={this.state.priceFrom} onChange={this.priceFrom_change} />
          {/* <input type="number" name="price_to" placeholder="до"/> */}
        </label>
        <hr/>
        
        <label>
          {/* <input type="checkbox" name="is_sale"/> В продаже */}
        </label>
        <hr/>

        <label>
          Производитель:<br/>
          {/* <input type="checkbox" name="LG_check"/> LG<br/> */}
          {/* <input type="checkbox" name="Philips_check"/> Philips<br/> */}
          {/* <input type="checkbox" name="Samsung_check"/> Samsung<br/> */}
        </label>
        <hr/> 
      
        <label>
          Диагональ:
          {/* <input type="number" name="diag_from" placeholder="от"/> */}
          {/* <input type="number" name="diag_to" placeholder="до"/> */}
        </label>
        <hr/>

        <label>
          Разрешение:<br/>
          {/* <input type="checkbox" name="4k_check"/> 4K<br/> */}
          {/* <input type="checkbox" name="1080p_check"/> 1080p<br/> */}
          {/* <input type="checkbox" name="1080i_check"/> 1080i<br/> */}
          {/* <input type="checkbox"name="720p_check"/> 720p<br/> */}
        </label>
        <hr/> 
      </form>
    );
  }
}

export default Filter;
