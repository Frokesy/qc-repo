import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./layout.scss";
import Navbar from "./navbar";
import About from "../../screens/home/about"
export const Aboutus = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="app-wrapper">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="layout-children">
        <div className="layout-ch">
            <About/>
        </div>
      </div>
    </div>
  );
};

export const AuthPage = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return <Route {...props}>{children}</Route>;
};

export const ProtectedRoutes = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/signin" />}
    </Route>
  );
};
