import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/common.css";
import "../../styles/sdc.css";
import "../../styles/black.css";
import Item from "../Item/Item.jsx";
import Home from "../Home/Home.jsx";
import Search from "../Search/Search.jsx";
import NoMatch from "../NoMatch/NoMatch.jsx";

const App = () => {
  return (
    <div>
      <div className="subheader" />
      <div className="navbar">
        <div className="logo">
          USGS Science Data Catalog - Proof of Concept App using React Framework
          and Elasticsearch
        </div>
      </div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/item/:itemId" component={Item} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
