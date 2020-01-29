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

const App = () => {
  const [datas, setdatas] = useState();

  return (
    <div>
      <Context.Provider
        value={{
          datas,
          setdatas
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/form" component={SignupForm} />
            <Route path="/dashboard">
              <Layout>
                <Dashboard />
              </Layout>
            </Route>
            <Route path="/profile">
              <Layout>
                <Profile />
              </Layout>
            </Route>
            <Route path="/404">
              <Layout>
                <NotFound />
              </Layout>
            </Route>
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
