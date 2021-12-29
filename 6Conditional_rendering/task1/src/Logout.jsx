import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button onClick={onLogout} className="btn_login">
      Logout
    </button>
  );
};
export default Logout;
