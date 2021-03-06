import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import App from "../App";
// import Navbar from '../components/navbar';
// import Home from '../components/home';
import Banner from '../components/banner';
import MensOuterwear from '../components/MensOuterwear';
import LadiesOuterwear from '../components/LadiesOuterwear';
import MensTShirts from '../components/MensTShirts';
import LadiesTShirts from '../components/LadiesTShirts';
import Menu1 from '../components/navbar2';
import ListProduct from '../components/ListProducts';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
// import Product from "./products";
import ViewProduct from "./ViewProduct";
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
        <Route path={"/navbar"} component={Menu1} exact ></Route>
        <Route path="/product/:id" component={ViewProduct} />
        <Route path="/Admin/list_products" component={ListProduct} />
        <Route path="/Admin/add_product" component={AddProduct} />
        <Route path="/Admin/edit_product/:id" component={EditProduct} />
    </Switch>
  </BrowserRouter>
);

export default Router;