import React from 'react';
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import {Switch, Route} from "react-router-dom"

function Main(props) {
  return (
    // Route负责路由切换
    // Switch负责只显示一个完全匹配项
    <div className="main">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/login/register" component={Register}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default Main;
