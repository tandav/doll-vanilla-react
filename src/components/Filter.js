import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  filterChange = (event) => {
    // this is from react docs https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form className="Filter">
        <label> 
          Цена:
          <input type="number" name="priceFrom" placeholder="от" value={this.state.priceFrom} onChange={this.filterChange} />
          <input type="number" name="priceTo" placeholder="до" value={this.state.priceTo} onChange={this.filterChange} />  
        </label>
        <hr/>
        
        <label>
           <input type="checkbox" name="isSale" value={this.state.isSale} onChange={this.filterChange} /> В продаже 
        </label>
        <hr/>

        <label>
          Производитель:<br/>
           <input type="checkbox" name="LG_check" value={this.state.LG_check} onChange={this.filterChange} /> LG<br/> 
           <input type="checkbox" name="Philips_check" value={this.state.Philips_check} onChange={this.filterChange} /> Philips<br/> 
           <input type="checkbox" name="Samsung_check" value={this.state.Samsung_check} onChange={this.filterChange} /> Samsung<br/> 
        </label>
        <hr/> 
      
        <label>
          Диагональ:
           <input type="number" name="diagFrom" placeholder="от"/> 
           <input type="number" name="diagTo" placeholder="до"/> 
        </label>
        <hr/>

        <label>
          Разрешение:<br/>
           <input type="checkbox" name="4k_check" value={this.state._4k_check} onChange={this.filterChange} /> 4K<br/> 
           <input type="checkbox" name="1080p_check" value={this.state._1080p_check} onChange={this.filterChange} /> 1080p<br/> 
           <input type="checkbox" name="1080i_check" value={this.state._1080i_check} onChange={this.filterChange} /> 1080i<br/> 
           <input type="checkbox"name="720p_check" value={this.state._720p_check} onChange={this.filterChange} /> 720p<br/> 
        </label>
        <hr/> 
      </form>
    );
  }
}

export default Filter;
