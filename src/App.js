import React from "react";
import './App.css';
import {
  About,
  Album,
  Home,
} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/album">
                <Album />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
