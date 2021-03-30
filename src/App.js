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
} from './pages'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/albums/:albumId" component={Album} />
              <Route path="/albums" component={Albums} />
              <Route path="/" component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
