import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Book from './Components/Book/Book';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard';



// context api
export const userContext = createContext();


function App() {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    success: false,
    error: '',
  });

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000)
  }, []);
  return (
    loader ? <div className="text-center" id="spinner"><div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div></div> :
      <userContext.Provider value={[user, setUser]}>
        <Router className="App">
          <Navbar />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/adminPanel">
              <MainDashboard />
            </Route>
            <Route exact path="/">
              <Book />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
  );
}

export default App;
