import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <HelloWorld name="Jaedon" />

        <ul>
          <li>
            <Link to="/" className="text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">
              About
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">Welcome home</h1>
          </Route>

          <Route path="/about">
            <h1 className="font-bold text-2xl">About</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
