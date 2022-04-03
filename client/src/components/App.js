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

import Footer from "./Footer";
import AllStore from "./AllStore";
import ProductDetails from "./ProductDetails";

import Cart from "./Cart";



const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  // // const [bacon, setBacon] = useState(null);
  

  const handleClickOnCartIcon = () => {
    setIsCartVisible(!isCartVisible)
  };


return (
  <BrowserRouter>
  <GlobalStyles />
  <Cart
  isCartVisible={isCartVisible}
  handleClickOnCartIcon={handleClickOnCartIcon}/>

  <Header
  isCartVisible={isCartVisible}
  handleClickOnCartIcon={handleClickOnCartIcon}/>
  
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/products">
        <AllStore handleClickOnCartIcon={handleClickOnCartIcon}/>
      </Route>
      <Route exact path="/brands">
        <Brands />
      </Route>

      <Route exact path="/products/:_id">
        {/* <ProductDetails /> */}
        <ProductDetails handleClickOnCartIcon={handleClickOnCartIcon}/>

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
      <Route exact path="/error">
        <Error />
      </Route>
                

    </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);
};

export default App;
