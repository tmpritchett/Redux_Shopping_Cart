import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheets/App.css';
import '../src/stylesheets/index.css';
import App from '../src/components/App.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
