// import React from 'react';
// import { useParams } from 'react-router-dom';

// class User extends React.Component {
//   state = {
//     avatarUrl: null,
//     name: null,
//     lacation: null,
//   };

//   componentDidMount() {
//     this.fetchUserInfo(this.props.match.params.userId);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.userId !== this.props.match.params.userId) {
//       this.fetchUserInfo(this.props.match.params.userId);
//     }
//   }

//   fetchUserInfo = (userId) => {
//     return fetch(`https://api.github.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((userInfo) => {
//         console.log(userInfo);
//         this.setState({
//           avatarUrl: userInfo.avatar_url,
//           name: userInfo.name,
//           location: userInfo.location,
//         });
//       });
//   };

//   render() {
//     const { avatarUrl, name, location } = this.state;

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

// export default User;

// // get userId from props
// // fetch with userId from cDM
// // add data to state
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState({
    avatarUrl: null,
    name: null,
    lacation: null,
  });

  const { userId } = useParams();

  const fetchUserInfo = async () => {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    const { avatar_url: avatarUrl, name, location } = await response.json();

    setUserData({
      avatarUrl,
      name,
      location,
    });
  };

  useEffect(() => {
    fetchUserInfo();
  }, [userId]);

  const { avatarUrl, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;

// get userId from props
// fetch with userId from cDM
// add data to state

// get userId from props
// fetch with userId from cDM
// add data to state
