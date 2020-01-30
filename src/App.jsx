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
import Circus from "./pages/Circus";
import Cart from "./pages/Cart";

const App = () => {
  const [connectedUser, setConnectedUser] = useState();
  const [circusList, setCircusList] = useState();
  const [circusSelected, setCircusSelected] = useState();
  const [cart, setCart] = useState();

  return (
    <div>
      <Context.Provider
        value={{
          connectedUser,
          setConnectedUser,
          circusList,
          setCircusList,
          circusSelected,
          setCircusSelected,
          cart,
          setCart
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/form/:level" component={SignupForm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/circus" component={Circus} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
