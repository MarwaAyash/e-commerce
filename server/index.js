"use strict";

const express = require("express");
const morgan = require("morgan");

//res.locals.items to access
const items = require("./data/items.json");
//res.locals.companies to access
const companies = require("./data/companies.json");
const orders = [];
const customers = [];

const { getItems, getCompanies, getItem, getCompany } = require("./handlers");

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
  func();
};

const passCustomersTo = (req, res, func) => {
  res.locals.customers = customers;
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
  .post("/api/get-item", passItemsTo, getItem)
  .get("/api/get-companies", passCompaniesTo, getCompanies)
  .post("/api/get-company", passCompaniesTo, getCompany)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
