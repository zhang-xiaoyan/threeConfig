import React, {Component} from 'react';
import styles from './greeter.css';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component{
   constructor(props){
       super(props);
       this.state = {
           isLoggedIn: false
       };
       this.handleLoginClick = this.handleLoginClick.bind(this);
       this.handleLogoutClick = this.handleLogoutClick.bind(this);
   }
   render(){
       const isLoggedIn = this.state.isLoggedIn;
       let button = null;
       if(isLoggedIn){
           button = <LogoutButton onClick={this.handleLogoutClick}/>
       }else {
           button = <LoginButton onClick={this.handleLoginClick}/>
       }
       return(
           <section className={styles.root}>
               <Greeting isLoggedIn={isLoggedIn}/>
               {button}
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