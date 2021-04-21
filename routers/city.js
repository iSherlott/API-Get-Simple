const express = require("express");
const router = express.Router();

const city_controllers = require("../controllers/city_controllers");

router.get("/", city_controllers.find);

module.exports = router;
