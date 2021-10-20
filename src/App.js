import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Treatments from './components/Treatments/Treatments';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import Contact from './components/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateSingleTreatment from './components/Treatment/PrivateSingleTreatment';

//All public and private routes (Doctors and Single Treatments both are private route here)
function App () {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <Route exact path="/treatments">
              <Treatments></Treatments>
            </Route>
            <PrivateRoute exact path="/treatment/:treatmentId">
              <PrivateSingleTreatment></PrivateSingleTreatment>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
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
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
