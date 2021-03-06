import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './redux/reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import "bootstrap/dist/css/bootstrap.min.css"

const store=createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);
