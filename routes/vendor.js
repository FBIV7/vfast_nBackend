const express = require("express");
const { vendorAdd } = require("../controllers/vendor");

const router = express.Router();

router.post("/add", vendorAdd);

module.exports = router;
