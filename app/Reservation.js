import React, {Component} from 'react';

class Reservation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render(){
        let isGoing = this.state.isGoing;
        let numberOfGuests = this.state.numberOfGuests;
        return(
            <form>
                <label>
                    Is going:
                    <input
                        type="checkbox"
                        checked={isGoing}
                        name="isGoing"
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Number of guests:
                    <input
                        type="number"
                        value={numberOfGuests}
                        name="numberOfGuests"
                        onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
}
export default Reservation;