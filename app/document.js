import React, {Component} from 'react';
class Document extends Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
        this.test = this.test.bind(this);
    }
    render(){
        let seconds = this.state.seconds;
        return(
            <div>
                <div>
                    <p onClick={this.test}>{seconds}</p>
                </div>
            </div>
        )
    }
    tick() {

        /*this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));*/
    }
    test(){
        // 如果没有在 constructor 里面 this.test = this.test.bind(this) 这样是取不到 this
        console.log('方法中的this:', this);
    }
    componentDidMount(){
        console.log('生命周期:', this);
        this.test(); // 如果没有在 constructor 里面 this.test = this.test.bind(this) 这样能取到 this
        //this.interval = setInterval(() => this.tick(), 1000);
    }
}
export default Document;