import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi2 from "../pages/Imobi2";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import PrivateRoute from "../components/PrivateRoute";
const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel/:slug" component={Imobi2} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterApp;
