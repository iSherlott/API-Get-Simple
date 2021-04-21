const express = require("express");
const router = express.Router();

const zip_code_controllers = require("../controllers/zip_code_controllers");

router.get("/:zip", zip_code_controllers.findOne);

module.exports = router;
