import React, { Component } from 'react';
import '../styles/Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        Сортировать по цене: {/*for stpcing*/}
        <button onClick={() => this.props.updateSortParams()} >{this.props.sortparams.price === 'desc' ? '↓' : '↑'}</button>
        <hr/>
        <form>          
          <label> 
            Цена:
            <input type="number" name="priceFrom" placeholder="от" onChange={this.props.updateFilterParams} />
            <input type="number" name="priceTo" placeholder="до" onChange={this.props.updateFilterParams} /> 
          </label>
          
          <hr/>
          
          <label>
            <input type="checkbox" name="isSale" checked={this.props.isSale} onChange={this.props.updateFilterParams} /> В продаже  
          </label>
          <hr/>

          <label>
            Производитель:<br/>
            <input type="checkbox" name="LG_check" checked={this.props.LG_check} onChange={this.props.updateFilterParams} /> LG<br/>   
            <input type="checkbox" name="Philips_check" checked={this.props.Philips_check} onChange={this.props.updateFilterParams} /> Philips<br/>  
            <input type="checkbox" name="Samsung_check" checked={this.props.Samsung_check} onChange={this.props.updateFilterParams} /> Samsung<br/>  
          </label>
          <hr/>
        
          <label>
            Диагональ:
            <input type="number" name="diagFrom" placeholder="от" onChange={this.props.updateFilterParams} />  
            <input type="number" name="diagTo" placeholder="до" onChange={this.props.updateFilterParams} />  
          </label>
          <hr/>

          <label>
            Разрешение:<br/>
            <input type="checkbox" name="_4k_check" checked={this.props._4k_check} onChange={this.props.updateFilterParams} /> 4K<br/>  
            <input type="checkbox" name="_1080p_check" checked={this.props._1080p_check} onChange={this.props.updateFilterParams} /> 1080p<br/>  
            <input type="checkbox" name="_1080i_check" checked={this.props._1080i_check} onChange={this.props.updateFilterParams} /> 1080i<br/>  
            <input type="checkbox" name="_720p_check" checked={this.props._720p_check} onChange={this.props.updateFilterParams} /> 720p<br/>  
          </label>
          <hr/>
        </form>  
      </div>    
    );
  }
}

export default Filter;
