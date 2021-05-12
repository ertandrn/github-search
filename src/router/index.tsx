import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Search from "../views/Search";

function Routers() {
  return (
      <Router>
          <Switch>
            <Route component={Search} path="/" exact />
          </Switch>
      </Router>
  );
}

export default Routers;