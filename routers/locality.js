const express = require("express");
const router = express.Router();

const locality_controllers = require("../controllers/locality_controllers");

router.get("/", locality_controllers.find);

module.exports = router;
