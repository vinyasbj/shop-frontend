import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Navbar from '../components/navbar';
import Home from '../components/home';
import Banner from '../components/banner';
import MensOuterwear from '../components/MensOuterwear';
import LadiesOuterwear from '../components/LadiesOuterwear';
import MensTShirts from '../components/MensTShirts';
import LadiesTShirts from '../components/LadiesTShirts';
import Product from "./products";
import Login from "./login";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={App} exact /> */}
        {/* <Route path={"/"} component={Home} exact ></Route>   */}
        <Route path={"/"} component={Banner} exact ></Route>  
        <Route path={"/Login"} component={Login} exact ></Route>  
        <Route path={"/MensOuterwear"} component={MensOuterwear} exact ></Route>
        <Route path={"/LadiesOuterwear"} component={LadiesOuterwear} exact ></Route>
        <Route path={"/MensT-Shirts"} component={MensTShirts} exact ></Route>
        <Route path={"/LadiesT-Shirts"} component={LadiesTShirts} exact ></Route>
      <Route path="/product/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Router;