import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h1>Getting here</h1>

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} />
    </div>

  </Router>
);


export default App;