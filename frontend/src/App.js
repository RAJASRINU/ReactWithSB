import React, { Component } from "react";
import AddEmployee from "./Components/AddEmployee";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route,  HashRouter,Switch } from "react-router-dom";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <Switch>
      <HashRouter>
        <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/addEmployee" component={AddEmployee} />
        <Route exact path="/view" component={Table} />
       
        </div>
        </HashRouter>
        </Switch>
    );
  }
}

export default App;
