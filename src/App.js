import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  About,
  Album,
  Albums,
  Home,
  NewHome,
} from './pages'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/albums/:albumId" component={Album} />
              <Route path="/albums" component={Albums} />
              <Route path="/" component={NewHome} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
