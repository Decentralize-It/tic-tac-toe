import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Template from './containers/Template'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Template/>, document.getElementById('root'));
registerServiceWorker();
