const express = require("express");
const router = express.Router();

const neighborhood_controllers = require("../controllers/neighborhood_controllers");

router.get("/:neighborhood", neighborhood_controllers.find);

module.exports = router;
