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
  Blogs,
  NewHome,
} from './pages'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              {/* About Page */}
              <Route path="/about" component={About} />
              
              {/* Album Page */}
              <Route path="/albums/:albumId" component={Album} />
              <Route path="/albums" component={Albums} />

              {/* Blog Page */}
              <Route path="/blogs" component={Blogs} />

              {/* Home Page */}
              <Route path="/" component={NewHome} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
