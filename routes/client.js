const express = require("express");
const { add,getClient,addPackage,getClients  } = require("../controllers/client");

const router = express.Router();
const {protect} = require("../middleware/auth")
router.post("/add", add);
router.post("/addpackage", addPackage);
router.get("/getclient", getClient);
router.get("/getclients",protect, getClients);
// router.get("/getpackagebyid/:id", getpackagebyID);

module.exports = router;
