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
    }
  }

  priceFrom_change         = (event) => this.setState({priceFrom:     event.target.value})
  priceTo_change           = (event) => this.setState({priceTo:       event.target.value})
  isSale_change            = (event) => this.setState({isSale:        event.target.value})
  LG_check_change          = (event) => this.setState({LG_check:      event.target.value})
  Philips_check_change     = (event) => this.setState({Philips_check: event.target.value})
  Samsung_check_change     = (event) => this.setState({Samsung_check: event.target.value})
  diagFrom_change          = (event) => this.setState({diagFrom:      event.target.value})
  diagTo_change            = (event) => this.setState({diagTo:        event.target.value})
  _4k_check_change         = (event) => this.setState({_4k_check:     event.target.value})
  _1080p_check_change      = (event) => this.setState({_1080p_check:  event.target.value})
  _1080i_check_change      = (event) => this.setState({_1080i_check:  event.target.value})
  _720p_check_check_change = (event) => this.setState({_720p_check:   event.target.value})

  render() {
    return (
      <form className="Filter">
        <label> 
          Цена:
          <input type="number" name="price_from" placeholder="от" value={this.state.priceFrom} onChange={this.priceFrom_change} />
          <input type="number" name="price_to" placeholder="до" value={this.state.priceTo} onChange={this.priceTo_change} />  
        </label>
        <hr/>
        
        <label>
           <input type="checkbox" name="is_sale" value={this.state.isSale} onChange={this.isSale_change} /> В продаже 
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
