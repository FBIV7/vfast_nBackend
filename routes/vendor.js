const express = require("express");
const { vendorAdd, vendorGet, addPrice} = require("../controllers/vendor");

const router = express.Router();

router.post("/add", vendorAdd);
router.get("/get", vendorGet);
router.post("/addprice", addPrice);

module.exports = router;
