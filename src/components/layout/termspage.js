import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./layout.scss";
import Navbar from "./navbar";
import Terms from "../../screens/home/terms"
export const Termspage = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="app-wrapper">
      <div className="app-navbar"id="app-navbar">
        <Navbar />
      </div>

      <div className="layout-children" id="">
        <div className="layout-ch" id="layout-ch">
            <Terms/>
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
