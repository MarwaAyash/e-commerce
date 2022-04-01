import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const AllContext = createContext();

let initialState = {

    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    province: "",
    country: "",
    creditCardNum: "",
    expDate: "",
    phone: "",
    orderNum: uuidv4(),
};

//flesh out more//
export const AllProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [brandNames, setBrandNames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);


    //put appropriate useEffect apis here//

    return (
        <AllContext.Provider
    value={{
        products,
        brandNames,
        categories,
        selectedItems,
        setSelectedItems,
    }}
    >
        {children}
    </AllContext.Provider>
    );
    };
