import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./components/Characters";
// import Comics from "./components/Comics";

import Home from "./container/Home"; // Composant Home
import Header from "./components/Header";
import Footer from "./components/Footer";

import Cookies from "js-cookie"; // package npm

import Signup from "./container/Signup"; // Composant Signup
import Login from "./container/Login"; // Composant Login

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
        <Route path="/">
          <Characters />
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
