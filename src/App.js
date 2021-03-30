import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  About,
  Albums,
  Album,
  Home,
} from './pages'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/albums">
                <Albums />
              </Route>
              <Route path="/albums/:albumId">
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
