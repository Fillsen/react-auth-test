import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registration from "./components/Registration";
// Auth
import Board from "./components/Board";
import Login from "./components/Login";
import {Header} from "./components/static/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        {/* Components */}
        <Route exact path='/' component={Board}/>
        <Route exact path='/register' component={Registration}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}
