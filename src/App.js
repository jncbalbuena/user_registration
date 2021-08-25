import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { UserList} from "./UserList";
import { UserRegistration } from "./UserRegistration";
import {EditInfo} from './EditInfo'
function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">User</Link>
          </li>
          <li className="nav-item">
              <Link to='/userlist' className='nav-link'>User Registration</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/userlist" component={UserRegistration}/>
        <Route path='/edit/' component={EditInfo}/>
      </Switch>
    </div>
  );
}

export default App;
