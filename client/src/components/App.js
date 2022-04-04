import React, { useContext } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import HomePage from "./HomePage";
import Confirmation from "./Confirmation";
import Header from "./Header";
// import Brands from "./Brands";
import GlobalStyles from "./GlobalStyles";
import Checkout from "./Checkout";
import ViewOrder from "./ViewOrder";
import Error from "./Error";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import AllStore from "./AllStore";
import ProductDetails from "./ProductDetails";


import Cart from "./Cart";
import { AppContext } from "./AppContext";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  // // const [bacon, setBacon] = useState(null);

  const {userOrder, setUserOrder} = useContext(AppContext);
  const handleClickOnCartIcon = () => {
    setIsCartVisible(!isCartVisible);
  };

  
  const [orderId, setOrderId] = useState(null);
  const { formValue, setFormValue} = useContext(AppContext);
  const updateUserOrder = (newData) => {
    setUserOrder({ ...userOrder, ...newData });
  };
  
  useEffect(() => {
    
    const customerId = JSON.parse(window.localStorage.getItem(formValue.orderNum));
  console.log("customer", customerId)
    if (customerId) {
      
      fetch(`/api/get-order/${customerId}`)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          setUserOrder(res.data);
        });
    }
    
  }, [orderId]);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Cart
        isCartVisible={isCartVisible}
        handleClickOnCartIcon={handleClickOnCartIcon}
      />

      <Header
        isCartVisible={isCartVisible}
        handleClickOnCartIcon={handleClickOnCartIcon}
      />

      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <AllStore handleClickOnCartIcon={handleClickOnCartIcon} />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>

          <Route exact path="/products/:_id">
            {/* <ProductDetails /> */}
            <ProductDetails handleClickOnCartIcon={handleClickOnCartIcon} />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/confirmation">
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
