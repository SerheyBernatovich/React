import React from 'react';
// import Pagination from './Pagination.jsx';
import User from './User.jsx';

// inp users[]
// output jsx

// class UsersList extends React.Component {
//   render() {
//     return (
//       <div>
//         <Pagination />
//         <ul className="users">
//           <User />
//         </ul>
//       </div>
//     );
//   }
// }

// export default UsersList;

const UserList = (props) => {
  return (
    <ul className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
