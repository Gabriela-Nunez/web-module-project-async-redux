import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import nameReducer from './reducers/nameReducer';


import App from './App';
import './index.css';
import { Provider } from 'react-redux';



const store = createStore(nameReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
