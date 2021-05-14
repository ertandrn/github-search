import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SearchFirst from "./views/SearchFirst";
import SearchResults from "./views/SearchResults";
import RepositoryDetails from "./views/RepositoryDetails";
import UserDetails from "./views/UserDetails";


function App() {

  return (
    <Router>

      <Header />

      <Switch>
        <Route component={SearchFirst} path="/" exact />
        <Route component={SearchResults} path="/:search" exact/>
        <Route component={RepositoryDetails} path="/repository-details/:login/:name" exact />
        <Route component={UserDetails} path="/user-details/:login" exact />
      </Switch>
      
    </Router>
  );
}

export default App;