import './normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React, {
    exclude: ["ReactTooltip", "Handle"]
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
