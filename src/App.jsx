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
import History from "./pages/History";
import Reviews from "./pages/Reviews";

const App = () => {
  const [connectedUser, setConnectedUser] = useState();
  const [who, setWho] = useState("invité");
  const [circusList, setCircusList] = useState();
  const [circusSelected, setCircusSelected] = useState();
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState();
  const [reload, setReload] = useState(1);
  const [dataList, setDataList] = useState();

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
          setCart,
          history,
          setHistory,
          who,
          setWho,
          reload,
          setReload,
          dataList,
          setDataList
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
            <Route path="/history" component={History} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
