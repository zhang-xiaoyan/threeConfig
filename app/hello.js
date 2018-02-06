import React, {Component} from 'react';
import styles from './greeter.css';

class Hello extends Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.changeState = this.changeState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return(
            <div>
                <div onClick={this.changeState}>{this.props.name} {text} world!</div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
    handleClick(){
        this.refs.myTextInput.focus();
    }
    changeState(){
        this.setState({liked: !this.state.liked});
    }
}
export default Hello;