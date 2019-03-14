import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHome from "./components/UserHome";
import AddStudyForm from "./components/AddStudyForm";
import NavBar from "./components/NavBar";
import Boards from "./components/Boards";
import UserProfile from "./components/UserProfile";
import UserNotifications from "./components/UserNotifications";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={UserHome} />
          <PrivateRoute exact path="/add-study-form" component={AddStudyForm} />
          <PrivateRoute exact path="/boards" component={Boards} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
          <PrivateRoute
            exact
            path="/notifications"
            component={UserNotifications}
          />
        </div>
      </div>
    </Router>
  );
}
