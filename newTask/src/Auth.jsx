import React from 'react';
import Pagination from './Pagination.jsx';
import UsersList from './UsersList.jsx';

// algo
// 1 show Login by default
// 2 after login click-show Spiner for 2 second
// 3 after 2 sec-show Logout
// 4 after Logout click-show Login

class App extends React.Component {
  // pageNamber: num
  //
  state = {
    pageNumber: 1,
  };
  users = [
    { id: 1, name: 'Bob', age: 21 },
    { id: 2, name: 'Sam', age: 45 },
    { id: 3, name: 'Con', age: 22 },
    { id: 4, name: 'Man', age: 55 },
    { id: 5, name: 'Boy', age: 55 },
    { id: 6, name: 'Her', age: 31 },
  ];
  prevBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };
  nextBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };
  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToRender = this.users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          userCount={this.users.length}
          itemsPage={itemsPerPage}
        />
        <UsersList users={usersToRender} />
      </div>
    );
  }
}

export default App;
// REACT APPROACH
// make a layout
// splite on components
// static version in react
// declatre state and props
// write logic
