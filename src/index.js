import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  (
    <Provider store={store}>
  <HashRouter>
      <App />
  </HashRouter>
  </Provider>),
  document.getElementById('root')
);
