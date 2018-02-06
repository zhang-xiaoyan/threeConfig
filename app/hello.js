import React, {Component} from 'react';
import styles from './greeter.css';

class Hello extends Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            value: 'Hello!'
        };
        this.changeState = this.changeState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render(){
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        var value = this.state.value;
        return(
            <div>
                <div onClick={this.changeState}>{this.props.name} {text} world!</div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        )
    }
    handleClick(){
        this.refs.myTextInput.focus();
    }
    changeState(){
        this.setState({liked: !this.state.liked});
    }
    handleChange(){
        
    }
}
export default Hello;