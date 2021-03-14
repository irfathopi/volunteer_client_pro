import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Dashboard></Dashboard>
          </Route>
          <Route path = "/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
