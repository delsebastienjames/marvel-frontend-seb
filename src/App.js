import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Home from "./containers/Home";

import Details from "./containers/Details"; // Composant Details
import Header from "./components/Header";
import Footer from "./components/Footer";

import Cookies from "js-cookie"; // package npm

import Signup from "./containers/Signup"; // Composant Signup
import Login from "./containers/Login"; // Composant Login

const App = () => {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token, id) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
      Cookies.set("userId", id);
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route exact path="/id:">
          <Details />
        </Route>
        <Route exact path="/comics" setUser={setUser}>
          <Comics />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
