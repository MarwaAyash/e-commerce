import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  province: "",
  country: "",
  creditCardNum: "",
  expirationDate: "",
  phoneNumber: "",
  orderNum: "",
};

export const AppProvider = ({ children }) => {
  const [userOrder, setUserOrder] = useState({});
  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValue, setFormValue] = useState(initialState);
  const [purchased, setPurchased] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((res) => setItems(res.data));
  }, []);

  useEffect(() => {
    fetch("/api/get-companies")
      .then((res) => res.json())
      .then((res) => setBrands(res.data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        brands,
        itemsInCart,
        setItemsInCart,
        selectedItems,
        setSelectedItems,
        formValue,
        setFormValue,
        purchased,
        setPurchased,
        userOrder,
        setUserOrder,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
