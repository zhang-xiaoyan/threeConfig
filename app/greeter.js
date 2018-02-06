/*var config = require('./config.json');
module.exports = function () {
   var greet = document.createElement('div');
   greet.textContent = config.greetText;
   return greet;
};*/

import React, {Component} from 'react';
import config from './config.json';
import styles from './greeter.css';

var names = ['Alice', 'Emily', 'Kate'];
class Greeter extends Component{
   render(){
       return(
           <div className={styles.root}>
               {config.greetText}
               {
                   names.map(function (name, index) {
                       return <div className={styles.root_map} key={index}>Hello {name}.</div>
                   })
               }
           </div>
       )
   }
}
export default Greeter;