import React from 'react';
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import {Redirect, Switch, Route} from "react-router-dom"

function Main(props) {
  const { isLoggedIn, handleLoggedIn } = props;

  const showLogin = () => {
    // case1: already logged in
    // case2: hasn't logged in
    return isLoggedIn
      ?
      <Redirect to="/home"/>
      :
      <Login isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn}/>
  }

  return (
    // Route负责路由切换
    // Switch负责只显示一个完全匹配项
    <div className="main">
      <Switch>
        <Route path="/login" render={showLogin}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default Main;
