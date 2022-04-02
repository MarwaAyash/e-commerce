import React from "react";

import { BrowserRouter, Switch, Route  } from "react-router-dom";

import { useState, useEffect } from 'react';

import HomePage from "./HomePage";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Brands from "./Brands";
import GlobalStyles from "./GlobalStyles";
import Checkout from "./Checkout";
import ViewOrder from "./ViewOrder";
import Error from "./Error";
import ProductDetails from "./ProductDetails";
//import Footer from "./Footer";
// import SignIn from "./SignIn";
import Cart from "./Cart";



const App = () => {
  // const [isCartVisible, setIsCartVisible] = useState(false);
  // // const [bacon, setBacon] = useState(null);
  

  // const handleClickOnCartIcon = () => {
  //   setIsCartVisible(!isCartVisible)
  // };
  

return (
  <BrowserRouter>
  <GlobalStyles />
  <Header/>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      
      {/* <Route exact path="/products">
        <AllStore /> */}

      {/* </Route> */}
      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>
      <Route exact path="/brands">
      
        <Brands />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/confirmation" >
        <Confirmation />
      </Route>
      <Route exact path="/view-order">
        <ViewOrder />
      </Route>
      {/* <Route exact path="/signin" component={SignIn}>
        <SignIn />
      </Route> */}
      <Route exact path="/error">
        <Error />
      </Route>
    </Switch>

  
  </BrowserRouter>
);
};

export default App;
