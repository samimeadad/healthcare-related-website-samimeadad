import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Treatment from './components/Treatment/Treatment';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Treatment></Treatment>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
