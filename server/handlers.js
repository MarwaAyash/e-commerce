"use strict";

const { v4: uuidv4 } = require("uuid");
const { sendResponse, getItemById } = require("./utils");

const getItems = (req, res) => {
  sendResponse(res, 200, res.locals.items, "all items");
};

const getItem = (req, res) => {
  const _id = req.params._id;
  console.log(_id);
  const item = getItemById(res.locals.items, _id);
  if (!item) {
    return sendResponse(res, 400, req.params._id, "item not found");
  }
  sendResponse(res, 200, item, `returning item ${_id}`);
};

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
  //we need make sure we have all the information needed
  //  if there is missing information, return and send a response with status 400

  //Check what is in the cart
  //using a for loop we can check what is in the cart
  //for every item in the cart, check the itemId and compare it to a matching id in the items array
  // cart[i]
  // let item = getItemById(res.locals.items, cart[i].itemId)
  // make sure item is in database: if(!item) sendResponse(error)
  // if item exists, we need to check whether it is in stock
  // if(item.numinstock < numBought) return sendresponse(number requested of item unavailable: numinstock)
  // if(item.numinstock === 0) return sendresponse(item out of stock)

  // if the item is in stock we need to subtract numbought from numinstock
  // for(i = 0; i < length of res.locals.items; i++)
  //    if(res.locals.items[i]._id === cart[i].itemId)
  //      res.locals.item[i].numInStock = res.locals.items[i].numInStock - cart[i].numBought;

  // Order was successful, generate an order id with uuidv4()
  // res.locals.orders.push(the new order)
  // send response(order successful, respond with the order information)
};

const getOrders = (req, res) => {};

const getOrder = (req, res) => {};

const addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return sendResponse(res, 400, req.body, "Missing information");
  }
  let alreadyExists = false;
  for (let i = 0; i < res.locals.users.length; i++) {
    console.log(name, email);
    if (
      res.locals.users[i].name === name &&
      res.locals.users[i].email === email
    ) {
      alreadyExists = true;
    }
  }
  console.log(alreadyExists);
  if (alreadyExists) {
    return sendResponse(res, 400, req.body, "user already exists");
  }
  const _id = uuidv4();
  const userObject = { _id, name, email };
  res.locals.users.push(userObject);
  sendResponse(res, 200, userObject);
};

const getUsers = (req, res) => {
  sendResponse(res, 200, res.locals.users, "all users");
};

const getUser = (req, res) => {
  const _id = req.params._id;
  let user;
  for (let i = 0; i < res.locals.users.length; i++) {
    console.log(`req id: ${_id}, index ${i} id: ${res.locals.users[i]._id}`);
    if (res.locals.users[i]._id === _id) {
      user = res.locals.users[i];
      break;
    }
  }
  if (!user) {
    return sendResponse(res, 400, _id, "user not found");
  }
  sendResponse(res, 200, user, `returning user ${_id}`);
};

module.exports = {
  getItems,
  getCompanies,
  getItem,
  getCompany,
  addOrder,
  getOrders,
  getOrder,
  addUser,
  getUser,
  getUsers,
};
