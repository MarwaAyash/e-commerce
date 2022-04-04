"use strict";

const { v4: uuidv4 } = require("uuid");
const { getItemById, getIndexById } = require("./utils");

const sendResponse = (res, status, data, message = "") => {
  return res.status(status).json({ status, data, message });
};

const getItems = (req, res) => {
  sendResponse(res, 200, res.locals.items, "all items");
};

const getItem = (req, res) => {
  const _id = req.params._id;
  console.log(_id);
  let item = getItemById(res.locals.items, _id);
  if (!item) {
    return sendResponse(res, 400, req.params._id, "item not found");
  }
  sendResponse(res, 200, item, `returning item ${_id}`);
};

//

const getCompanies = (req, res) => {
  return sendResponse(res, 200, res.locals.companies, "all companies");
};

const getCompany = (req, res) => {
  const _id = req.params._id;
  let company;
  for (let i = 0; i < res.locals.companies.length; i++) {
    if (res.locals.companies[i]._id === Number(_id)) {
      company = res.locals.companies[i];
      break;
    }
  }
  if (!company) {
    return sendResponse(res, 400, req.params._id, "company not found");
  }
  sendResponse(res, 200, company, `returning company ${_id}`);
};


const addOrder = (req, res) => {
  //cart is an array containing objects with structure {itemId, numBought}


  const { name, email, creditcard, address, postalCode, cart } = req.body;
  console.log(req.body)
  //we need make sure we have all the information needed
  //  if there is missing information, return and send a response with status 400
  if (!name || !email || !creditcard || !address || !postalCode || !cart) {
    return sendResponse(res, 400, req.body, "missing information");
  }

  //Check what is in the cart
  //using a for loop we can check what is in the cart
  //we want to do all our checks before changing database
  const arrayOfIndexes = [];
  for (let i = 0; i < cart.length; i++) {
    //for every item in the cart, check the itemId and compare it to a matching id in the items array
    let item = getItemById(res.locals.items, cart[i].itemId);
    if (!item) {
      return sendResponse(
        res,
        400,
        req.body,
        `item with id ${cart[i].itemId} does not exist in database`
      );
    }
    if (item.numInStock === 0) {
      return sendResponse(
        res,
        400,
        req.body,
        `item with id ${cart[i].itemId} is out of stock`
      );
    }
    if (cart[i].numBought > item.numInStock) {
      return sendResponse(
        res,
        400,
        req.body,
        `requested amount of item with id ${cart[i].itemId} greater than number in stock. numInStock: ${item.numInStock}`
      );
    }

    //we already checked if the itemId corresponds to an item
    const index = getIndexById(res.locals.items, cart[i].itemId);

    //order in array corresponds to order in cart
    arrayOfIndexes.push(index);
  }

  //subtract num bought of each item from stock
  cart.forEach((item, i) => {
    res.locals.items[arrayOfIndexes[i]].numInStock -= item.numBought;
  });

  // send response(order successful, respond with the order information)
  const orderId = uuidv4();
  const order = {
    _id: orderId,
    name,
    email,
    creditcard,
    address,
    postalCode,
    cart,
  };
  res.locals.orders.push(order);
  return sendResponse(res, 200, order, `order with id ${orderId} created`);
};

const getOrders = (req, res) => {
  sendResponse(res, 200, res.locals.orders, "all orders");
};

const getOrder = (req, res) => {
  const _id = req.params._id;
  let order;
  for (let i = 0; i < res.locals.orders.length; i++) {
    console.log(`req id: ${_id}, index ${i} id: ${res.locals.orders[i]._id}`);
    if (res.locals.orders[i]._id === _id) {
      order = res.locals.orders[i];
      break;
    }
  }

  if (!order) {
    return sendResponse(res, 400, _id, "order not found");
  }

  sendResponse(res, 200, order, `returning order ${_id}`);
};

const deleteOrder = (req, res) => {
  const { _id } = req.body;
  const index = getIndexById(res.locals.orders, _id);
  console.log(index);
  if (index === null) {
    return sendResponse(res, 200, req.body, `order with id ${_id} not found`);
  }

  res.locals.orders = res.locals.orders.splice(index, 1);
  sendResponse(res, 200, { success: true }, "order deleted");
};

const updateOrder = (req, res) => {
  const { _id, name, email, address, postalCode, cart } = req.body;
};

const addCustomer = (req, res) => {};

const getCustomer = (req, res) => {};

module.exports = {
  getItems,
  getCompanies,
  getItem,
  getCompany,
  addOrder,
  getOrders,
  getOrder,
  deleteOrder,
};
