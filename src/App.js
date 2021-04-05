import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

export default function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [itemInfo, setItemInfo] = useState({})



  return (
    <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [itemInfo, setItemInfo] }}>

      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/checkout/:name">
            <CheckOut />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}