const express = require('express');
const routes = express.Router();

const ContentController = require("./controllers/ContentController");

routes.get("/", ContentController.show);
routes.post("/", ContentController.search);

module.exports = routes;