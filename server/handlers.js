"use strict";

const { v4: uuidv4 } = require("uuid");

const brands = require("./data/companies.json")
const items = require("./data/items.json")

// const getAllBrands = (req, res) => {
//   res.status(200).json({ status: 200, message: "Yay", data: brands})
// }

const sendResponse = (res, status, data, message = "") => {
  return res.status(status).json({ status, data, message });
};

const getItems = (req, res) => {
  res.status(200).json({ status: 200, message: "Yay", data: items})
};

const getItem = (req, res) => {
  const _id = req.params._id;
  console.log(_id);
  let item;
  for (let i = 0; i < res.locals.items.length; i++) {
    if (res.locals.items[i]._id === Number(_id)) {
      item = res.locals.items[i];
      break;
    }
  }
  if (!item) {
    return sendResponse(res, 400, req.params._id, "item not found");
  }
  sendResponse(res, 200, item, `returning item ${_id}`);
};

const getCompanies = (req, res) => {
    res.status(200).json({ status: 200, message: "Yay", data: brands})

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

const addOrder = (req, res) => {};

const getOrder = (req, res) => {};

const addCustomer = (req, res) => {};

const getCustomer = (req, res) => {};

module.exports = { getItems, getCompanies, getItem, getCompany };
