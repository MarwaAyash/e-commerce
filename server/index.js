"use strict";

const express = require("express");
const morgan = require("morgan");

//res.locals.items to access
const items = require("./data/items.json");
//res.locals.companies to access
const companies = require("./data/companies.json");
let orders = [];
let users = [];

const {
  getItems,
  getCompanies,
  getItem,
  getCompany,
  addUser,
  getUser,
  addOrder,
} = require("./handlers");
const { getUsers } = require("../../mini-project-facespace/backend/handlers");

const PORT = 4000;

//Middleman method to insert clients to res
//Will need to delete and refactor when migrating to mongodb
const passItemsTo = (req, res, func) => {
  res.locals.items = items;
  func();
};

const passCompaniesTo = (req, res, func) => {
  res.locals.companies = companies;
  func();
};

const passOrdersTo = (req, res, func) => {
  res.locals.orders = orders;
  res.locals.items = items;
  func();
};

const passUsersTo = (req, res, func) => {
  res.locals.users = users;
  func();
};

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/api/get-items", passItemsTo, getItems)
  .get("/api/get-item/:_id", passItemsTo, getItem)
  .get("/api/get-companies", passCompaniesTo, getCompanies)
  .get("/api/get-company/:_id", passCompaniesTo, getCompany)
  .post("/api/add-user", passUsersTo, addUser)
  .get("/api/get-users", passUsersTo, getUsers)
  .get("/api/get-user/:_id", passUsersTo, getUser)
  .post("/api/add-order", passOrdersTo, addOrder)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
