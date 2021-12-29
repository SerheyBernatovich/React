import React from 'react';
import Login from './Login.jsx';
import Spinner from './Spinner.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, showSpinner: false };
  }
  onLogin = () => {
    this.setState({ showSpinner: true });
    setTimeout(() => {
      this.setState({ showSpinner: false });
      this.setState({ isLoggedIn: true });
    }, 2000);
  };
  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    if (this.state.showSpinner) {
      return <Spinner size={1} />;
    }

    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );
  }
}
export default Auth;
