import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHome from "./components/UserHome";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={UserHome} />
      </div>
    </Router>
  );
}
