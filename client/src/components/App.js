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
import AllStore from "./AllStore";
import Footer from "./Footer";
// import SignIn from "./SignIn";
import Cart from "./Cart";



const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleClickOnCartIcon = () => {
    setIsCartVisible(!isCartVisible)
  };
  

return (
  <BrowserRouter>
  <GlobalStyles />
  <Cart
    isCartVisible={isCartVisible}
    handleClickOnCartIcon={handleClickOnCartIcon}/>

  <Header/>
    <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/products">
        <AllStore handleClickOnCartIcon={handleClickOnCartIcon}/>
      </Route>

      <Route exact path="/products/:id">
        <ProductDetails handleClickOnCartIcon={handleClickOnCartIcon}/>
      </Route>

      <Route exact path="/brands">
        <Brands />
      </Route>

      <Route exact path="/checkout">
        <Checkout />
      </Route>
      {/* <Route exact path="/signin" component={SignIn}>
        <SignIn />
      </Route> */}
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
