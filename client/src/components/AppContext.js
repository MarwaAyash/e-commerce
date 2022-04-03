import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import moment from "moment";

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
  orderNum: uuidv4(),
};

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [wearables, setWearables] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValue, setFormValue] = useState(initialState);
  const [purchased, setPurchased] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

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

//   useEffect(() => {
//     fetch("/api/categories")
//       .then((rest) => rest.json())
//       .then((json) => setCategories(json.data));
//   }, []);

//   useEffect(() => {
//     fetch("/api/wearables")
//       .then((rest) => rest.json())
//       .then((json) => setWearables(json.data));
//   }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        brands,
        itemsInCart,
        setItemsInCart,
        // categories,
        // wearables,
        selectedItems,
        setSelectedItems,
        formValue,
        setFormValue,
        purchased,
        setPurchased,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};