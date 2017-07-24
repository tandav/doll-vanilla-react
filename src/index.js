import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers';
import { createStore } from 'redux'

let store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));
