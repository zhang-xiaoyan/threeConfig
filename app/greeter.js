/*var config = require('./config.json');
module.exports = function () {
   var greet = document.createElement('div');
   greet.textContent = config.greetText;
   return greet;
};*/

import React, {Component} from 'react';
import config from './config.json';
import styles from './greeter.css';
import Hello from './hello';
import Document from './document';
import Demo1 from './demo1';

var names = ['Alice', 'Emily', 'Kate'];
var hList = [
    <h3 key="1">Hello world!</h3>,
    <h4 key="2">React is awesome</h4>
];
class Greeter extends Component{
   render(){
       return(
           <div className={styles.root}>
               {config.greetText}
               {
                   /*names.map(function (name, index) {
                       return <div className={styles.root_map} key={index}>Hello {name}.</div>
                   })*/
               }
               {/*<div className={styles.root_h4}>{hList}</div>*/}
               {/*<p>传过来的数据{this.props.name}</p>*/}
               {/*<Hello name="hello"></Hello>*/}
               {/*<Document></Document>*/}
               <Demo1 increment='1'></Demo1>
           </div>
       )
   }
}
export default Greeter;