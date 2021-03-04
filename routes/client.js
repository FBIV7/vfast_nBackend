const express = require("express");
const { add,getClient,addPackage  } = require("../controllers/client");

const router = express.Router();

router.post("/add", add);
router.post("/addpackage", addPackage);
router.get("/getclient", getClient);
// router.get("/getpackagebyid/:id", getpackagebyID);

module.exports = router;
