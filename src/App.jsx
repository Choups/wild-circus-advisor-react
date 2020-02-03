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
import "./App.css";

const App = () => {
  const [connectedUser, setConnectedUser] = useState();
  const [who, setWho] = useState("invité");
  const [circusList, setCircusList] = useState();
  const [circusSelected, setCircusSelected] = useState();
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState();
  const [reload, setReload] = useState(1);
  const [dataList, setDataList] = useState();
  const [animation, setAnimation] = useState(true);
  const [chat, setChat] = useState();
  const [loading, setLoading] = useState(false);
  const [newMsg, setNewMsg] = useState();
  const [reviewLength, setReviewLength] = useState(0);
  const [popAnim, setPopAnim] = useState();
  const [antispam, setAntispam] = useState();
  const [newHist, setNewHist] = useState(false);

  return (
    <div className="App">
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
          setDataList,
          animation,
          setAnimation,
          chat,
          setChat,
          loading,
          setLoading,
          newMsg,
          setNewMsg,
          reviewLength,
          setReviewLength,
          popAnim,
          setPopAnim,
          antispam,
          setAntispam,
          newHist,
          setNewHist
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
