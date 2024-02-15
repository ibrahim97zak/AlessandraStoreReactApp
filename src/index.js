import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './../node_modules/@fortawesome/fontawesome-free/js/all.min'
import './../node_modules/jquery/dist/jquery.min'
import "./../node_modules/slick-carousel/slick/slick.css"; 
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/AlessandraStoreReactApp'>
  <Provider store={store}> 

    <App /> 
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
