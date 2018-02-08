import React, {Component} from 'react';

class NumberList extends Component{
    render(){
        return(
            this.props.numberList.map(function (item, index) {
                return <p key={index}>{item + '~' +index}</p>
            })
        )
    }
}
export default NumberList;