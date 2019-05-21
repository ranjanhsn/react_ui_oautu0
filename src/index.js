
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Routes from "./Routes";

// const routes = makeMainRoutes();
const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, document.getElementById('root'));
