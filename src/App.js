import React, { Component } from "react";
import "./Resources/css/app.css";
import Layout from "./HOC/Layout";
import {Switch, Route} from 'react-router-dom';
import Home from "./Components/Home";
import SignIn from "./Components/signin";

class App extends Component {
  render() {
    return <div>
      <Layout>
        <Switch>
          <Route exact component={SignIn} to="/signin"/>
          <Route exact component={Home} to="/"/>
        </Switch>
      </Layout>
    </div>
  }
}

export default App;
