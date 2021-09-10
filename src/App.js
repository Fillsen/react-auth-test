import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./components/Registration";
// Auth
import Board from "./components/Board";
import Login from "./components/Login";
import {Header} from "./components/static/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./redux/api/users";

export default function App() {
  const isToken = useSelector(state => state.users.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isToken) {
      dispatch(auth());
    }
  }, [dispatch, isToken]);

  return (
    <Router>
      <Header/>
      {!isToken ? (
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Registration}/>
          <Redirect to='/login'/>
        </Switch>
      ) : (
        <Switch>
          <Route exact path='/' component={Board}/>
          <Redirect to=''/>
        </Switch>
      )}
    </Router>
  );
}
