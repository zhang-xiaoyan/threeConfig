import React, {Component} from 'react';
import styles from './greeter.css';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import NumberList from './NumberList';
import NameForm from './NameForm';

class LoginControl extends Component{
   constructor(props){
       super(props);
       this.state = {
           isLoggedIn: false,
           numberList: ['a', 'b', 'c', 'd']
       };
       this.handleLoginClick = this.handleLoginClick.bind(this);
       this.handleLogoutClick = this.handleLogoutClick.bind(this);
   }
   render(){
       const isLoggedIn = this.state.isLoggedIn;
       const unreadMessages = this.props.unreadMessages;
       const numberList = this.state.numberList;
       let button = null;
       if(isLoggedIn){
           button = <LogoutButton onClick={this.handleLogoutClick}/>
       }else {
           button = <LoginButton onClick={this.handleLoginClick}/>
       }
       return(
           <section className={styles.root}>
               {
                    unreadMessages.length >3 && <LogoutButton/>
               }
               {
                   isLoggedIn ? '显示true':'显示false'
               }
               {
                   isLoggedIn ? (<LogoutButton/>) : (<LoginButton/>)
               }
               <Greeting isLoggedIn={isLoggedIn}/>
               {button}
               <NumberList numberList={numberList}/>
               <NameForm/>
           </section>
       )
   }
    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        });
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        });
    }
}
export default LoginControl;