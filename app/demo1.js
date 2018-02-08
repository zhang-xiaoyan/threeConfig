import React, {Component} from 'react';
import styles from './greeter.css';
import Login from './logIn';
import NotLogin from './notLogin';

class Demo1 extends Component{
    constructor(props){
        super(props);
        this.formatName = this.formatName.bind(this);
        this.getGreeting = this.getGreeting.bind(this);
        this.changeCounter = this.changeCounter.bind(this);
        this.ifLogin = this.ifLogin.bind(this);
        this.state = {
            user: {
                firstName: 'Harper',
                lastName: 'Perez'
            },
            date: new Date(),
            counter: 0
        };
    }
    render(){
        let user = this.state.user;
        let date = this.state.date;
        let counter = this.state.counter;
        let isLoggedIn = this.props.isLoggedIn;
        return(
            <section className={styles.demo1_section}>
                <div>{this.getGreeting(user)}</div>
                <div>It is {date.toLocaleTimeString()}</div>
                <button onClick={this.changeCounter}>点击更改下面数据:</button>
                <div>{counter}</div>
                {/*<button onClick={this.preventPop.bind(this, counter)}>获取e</button>*/}
                <button onClick={(e)=>this.preventPop(counter, e)}>获取e</button>
                {this.ifLogin()}
            </section>
        )
    }
    componentDidMount(){
        //this.timerID = setInterval(() => this.tick(), 1000);
        //console.log('props:', this.props.increment, typeof this.props.increment);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    changeCounter(){
        /*this.setState({
            counter: this.state.counter + this.props.increment,
        });*/

        //异步要用下面的方式(参照API)
        this.setState((prevState, props) => ({
            counter: Number(prevState.counter) + Number(props.increment)
        }));
    }
    formatName(user){
        return user.firstName + ' ' + user.lastName;
    }
    getGreeting(user){
        if(user){
            return <p>Hello, {this.formatName(user)}!</p>;
        }
        return <p>Hello, Stranger.</p>;
    }
    preventPop(counter, e){
        console.log('counter:', counter);
        console.log('e:', e);
    }
    ifLogin(){
        let isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            return <Login/>
        }
        return <NotLogin/>
    }
}
export default Demo1;