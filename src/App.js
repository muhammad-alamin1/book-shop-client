import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Login from './Components/Auth/Login/Login';
import PrivateAdminRoute from './Components/Auth/PrivateAdminRoute/PrivateAdminRoute';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/Auth/PublicRoute/PublicRoute';
import SignUp from './Components/Auth/SignUp/SignUp';
import Book from './Components/Book/Book';
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import { AuthProvider } from './context/AuthContext';


function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000)
  }, []);
  return (
    loader ? <div className="text-center" id="spinner"><div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div></div> :
      <AuthProvider>
        <Router className="App">
          <Navbar />
          <Switch>
            <PublicRoute path="/signup">
              <SignUp />
            </PublicRoute>
            <PublicRoute path="/login">
              <Login />
            </PublicRoute>
            <PrivateAdminRoute path="/admin-panel">
              <MainDashboard />
            </PrivateAdminRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route exact path="/">
              <Book />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
