import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registration from "./components/Registration";
// Auth
import Board from "./components/Board";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Board}/>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}
