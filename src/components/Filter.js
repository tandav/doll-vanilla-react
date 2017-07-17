import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <form className="Filter">
        <label> 
          Цена:
          <input type="number" name="priceFrom" placeholder="от" onChange={this.props.filterProductList} />
          <input type="number" name="priceTo" placeholder="до" onChange={this.props.filterProductList} />   
        </label>
        <hr/>
        
        <label>
          <input type="checkbox" name="isSale" onChange={this.props.filterProductList} /> В продаже  
        </label>
        <hr/>

        <label>
          Производитель:<br/>
          <input type="checkbox" name="LG_check" onChange={this.props.filterProductList} /> LG<br/>  
          <input type="checkbox" name="Philips_check" onChange={this.props.filterProductList} /> Philips<br/>  
          <input type="checkbox" name="Samsung_check" onChange={this.props.filterProductList} /> Samsung<br/>  
        </label>
        <hr/>
      
        <label>
          Диагональ:
          <input type="number" name="diagFrom" placeholder="от" onChange={this.props.filterProductList} />  
          <input type="number" name="diagTo" placeholder="до" onChange={this.props.filterProductList} />  
        </label>
        <hr/>

        <label>
          Разрешение:<br/>
          <input type="checkbox" name="4k_check" onChange={this.props.filterProductList} /> 4K<br/>  
          <input type="checkbox" name="1080p_check" onChange={this.props.filterProductList} /> 1080p<br/>  
          <input type="checkbox" name="1080i_check" onChange={this.props.filterProductList} /> 1080i<br/>  
          <input type="checkbox"name="720p_check" onChange={this.props.filterProductList} /> 720p<br/>  
        </label>
        <hr/>
      </form>
    );
  }
}

export default Filter;
