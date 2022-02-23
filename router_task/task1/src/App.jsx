import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="page">
//           <ul className="navigation">
//             <li className="navigation__item">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>

//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/users" component={Users} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// // REACT APPROACH
// // 0. make a layout
// // 1. split on components
// // 2. static version in react
// // 3. declare state and props
// // 4. write logic

// export default App;
const App = () => (
  <Router>
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  </Router>
);

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

export default App;
