import React from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Books from "./components/pages/Books";
import OmdbContainer from "./components/pages/OmdbContainer";
import GoogleContainer from "./components/pages/GoogleContainer";

        import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/OmdbContainer" component={OmdbContainer} />
        <Route path="/GoogleContainer" component={GoogleContainer} />

      </div>
    </Router>
  );
}

export default App;







