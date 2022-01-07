import React from 'react';

const User = ({ name, age }) => {
  return (
    <ul className="users">
      <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    </ul>
  );
};
export default User;
