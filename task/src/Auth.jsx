import React from 'react';
import Login from './Login.jsx';
import Spinner from './Spinner.jsx';
import Logout from './Logout.jsx';

// algo
// 1 show Login by default
// 2 after login click-show Spiner for 2 second
// 3 after 2 sec-show Logout
// 4 after Logout click-show Login

class Auth extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIN: false,
  //     isLoading: false,
  //   };
  // }
  state = {
    isLoggedIN: false,
    isLoading: false,
  };
  // isLoggedIN: boolean
  // isLogging: boolean
  handleLoginClick = () => {
    //  setState inp obj
    // out undefined
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, isLoggedIN: true });
    }, 2000);
  };
  render() {
    const { isLoading, isLoggedIN } = this.state;
    if (isLoading) {
      return <Spinner />;
    }
    if (isLoggedIN) {
      return <Logout />;
    }
    return <Login onLogin={this.handleLoginClick}> </Login>;
  }
}

export default Auth;
// REACT APPROACH
// make a layout
// splite on components
// static version in react
// declatre state and props
// write logic
