import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <button onClick={onLogin} className="login btn">
      Login
    </button>
  );
};
export default Login;
