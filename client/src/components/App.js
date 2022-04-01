import React from "react";
<<<<<<< Updated upstream

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

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
import Footer from "./Footer";
import SignIn from "./SignIn";
import Cart from "./Cart";



const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  // const [bacon, setBacon] = useState(null);
  
  
  const handleClickOnCartIcon = () => {
    setIsCartVisible(!isCartVisible)
  };


return (
  <>
  <GlobalStyles />
  <Router>
    <Header />
    <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/brands">
        <BrandsPage />
      </Route>
      <Route exact path="/products">
      {/* <FilterProvider>
        <CollectionPage handleClickOnCartIcon={handleClickOnCartIcon}
      </FilterProvider> */}
      </Route>
      <Route exact path="/products/:productId">
        <ProductDetails handleClickOnCartIcon={handleClickOnCartIcon} />
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
      <Route exact path="/signin" component={SignIn}>
        <SignIn />
      </Route>
      <Route exact path="/error">
        <Error />
      </Route>
    </Switch>
</main>
<Footer />
  </Router>
  </>
);
};

=======
import { BrowserRouter, Switch, Route } from "react-dom";
import GlobalStyles from "../GlobalStyle";
import styled from "styled-components";
import Header from "./HeaderFolder/Header";
import Homepage from "./HomepageFolder/Homepage";
import ProductPage from "./ProductFolder/ProductPage";
import Footer from './Footer';
import Cart from './CartFolder/Cart';
import Login from './AuthenticationFolder/Login';
import Signup from './AuthenticationFolder/Signup';
import Profile  from './AuthenticationFolder/Profile';
//import useWindowsWidth from '../customHooks/useWindowsWidth';
import useFetchCart from '../customHooks/fetchCart';
import useFetchAllItems from '../customHooks/useFetchAllItems';
import useFetchUser from '../customHooks/useFetchUser';
import ConfirmedOrder from "./CartFolder/ConfirmedOrder";

<<<<<<< Updated upstream
export default App;
=======

const App = () => {

  useFetchCart();
  useFetchAllItems();
  useFetchUser();
>>>>>>> Stashed changes

  //const isMobile = useWindowsWidth();
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          {/* {!isMobile && <Header /> } */}
          <Header />
          <Switch>
            <Route exact path="/">
            
              {/* {isMobile ? <MobileHp/> : <Homepage/>} */}
              <Homepage />
            </Route>
            <Route path="/api/product/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/confirmed-order">
              <ConfirmedOrder />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
  };

  const Wrapper = styled.div``;
export default App;


>>>>>>> Stashed changes
