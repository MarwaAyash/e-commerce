import React from "react";

import { BrowserRouter, Switch, Route  } from "react-router-dom";

import { useState, useEffect } from 'react';

import HomePage from "./HomePage";
import Confirmation from "./Confirmation";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
// import CollectionPage from "./CollectionPage";
import BrandsPage from "./BrandsPage";
import GlobalStyles from "./GlobalStyles";
import Checkout from "./Checkout";
import ViewOrder from "./ViewOrder";
import Error from "./Error";
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
      
      <Route exact path="/products">
      {/* <FilterProvider>
        <CollectionPage handleClickOnCartIcon={handleClickOnCartIcon}
      </FilterProvider> */}
      </Route>
      <Route exact path="/products/:productId">
        <ProductDetails />
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
