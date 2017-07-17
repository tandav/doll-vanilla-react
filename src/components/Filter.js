import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        Цена, руб:
        <input type="text" name="price_from" placeholder="от"/>
        <input type="text" name="price_to" placeholder="до"/>
        <hr/>
        <input type="checkbox"/> В продаже
        <hr/>
        Производитель:<br/>
        <input type="checkbox"/> LG<br/>
        <input type="checkbox"/> Philips<br/>
        <input type="checkbox"/> Samsung<br/>
        <hr/>
        Диагональ:
        <input type="text" name="diag_from" placeholder="от"/>
        <input type="text" name="diag_to" placeholder="до"/>
        <hr/>
        Разрешение:<br/>
        <input type="checkbox"/> 4K<br/>
        <input type="checkbox"/> 1080p<br/>
        <input type="checkbox"/> 1080i<br/>
        <input type="checkbox"/> 720p<br/>
        <hr/>
      </div>
    );
  }
}

export default Filter;
