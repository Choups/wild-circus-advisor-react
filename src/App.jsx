import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Context from "./context/";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import SignupForm from "./pages/SignupForm";
import Layout from "./layouts/general";
import Circus from "./pages/Circus";
import Cart from "./pages/Cart";

const App = () => {
  const [connectedUser, setConnectedUser] = useState();

  return (
    <div>
      <Context.Provider
        value={{
          connectedUser,
          setConnectedUser
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/form/:level" component={SignupForm} />
            <Route path="/dashboard">
              <Layout child="dashboard">
                <Dashboard />
              </Layout>
            </Route>
            <Route path="/circus">
              <Layout child="circus">
                <Circus />
              </Layout>
            </Route>
            <Route path="/profile">
              <Layout child="profile">
                <Profile />
              </Layout>
            </Route>
            <Route path="/cart">
              <Layout child="cart">
                <Cart />
              </Layout>
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
