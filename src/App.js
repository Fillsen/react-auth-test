import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "./components/Auth";
import Board from "./components/Board";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Board}/>
        <Route exact path='/login' component={Auth}/>
      </Switch>
    </Router>
  );
}
