import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        {/* <PrivateRoute exact path="/home" component={Home} /> */}
      </div>
    </Router>
  );
}
