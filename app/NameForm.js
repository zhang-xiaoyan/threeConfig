import React, {Component} from 'react';

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        let value = this.state.value;
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type='text' value={value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
    handleChange(event){
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
}
export default NameForm;