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
          <input type="checkbox" name="isSale" checked={this.props.isSale} onChange={this.props.filterProductList} /> В продаже  
        </label>
        <hr/>

        <label>
          Производитель:<br/>
          <input type="checkbox" name="LG_check" checked={this.props.LG_check} onChange={this.props.filterProductList} /> LG<br/>   
          <input type="checkbox" name="Philips_check" checked={this.props.Philips_check} onChange={this.props.filterProductList} /> Philips<br/>  
          <input type="checkbox" name="Samsung_check" checked={this.props.Samsung_check} onChange={this.props.filterProductList} /> Samsung<br/>  
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
          <input type="checkbox" name="_4k_check" checked={this.props._4k_check} onChange={this.props.filterProductList} /> 4K<br/>  
          <input type="checkbox" name="_1080p_check" checked={this.props._1080p_check} onChange={this.props.filterProductList} /> 1080p<br/>  
          <input type="checkbox" name="_1080i_check" checked={this.props._1080i_check} onChange={this.props.filterProductList} /> 1080i<br/>  
          <input type="checkbox" name="_720p_check" checked={this.props._720p_check} onChange={this.props.filterProductList} /> 720p<br/>  
        </label>
        <hr/>
      </form>
    );
  }
}

export default Filter;
