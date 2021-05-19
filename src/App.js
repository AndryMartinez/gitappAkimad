import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Users from './views/users'
import User from './views/user'



function App() {
  return (
<Router>
      <div>
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
