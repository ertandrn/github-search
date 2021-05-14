import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SearchFirst from "./views/SearchFirst";
import Search from "./views/Search";
import RepositoryDetails from "./views/RepositoryDetails";


function App() {

  return (
    <Router>

      <Header />

      <Switch>
        <Route component={SearchFirst} path="/" exact />
        <Route component={Search} path="/:search" exact/>
        <Route component={RepositoryDetails} path="/repository-details/:login/:name" exact />
      </Switch>
    </Router>
  );
}

export default App;