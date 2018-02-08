import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './LoginControl';
import './main.css';

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(<LoginControl unreadMessages={messages}/>, document.getElementById('root'));
