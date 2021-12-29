import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <button onClick={onLogin} className="btn_login">
      Login
    </button>
  );
};
export default Login;
