//const greeter = require('./greeter.js');
//document.querySelector("#root").appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './greeter';
import './main.css';

ReactDOM.render(<Greeter name="xxx"/>, document.getElementById('root'));
