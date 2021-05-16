import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Characters />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
