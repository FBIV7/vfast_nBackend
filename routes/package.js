const express = require("express");
const { add, getpackage,getpackagebyID } = require("../controllers/package");

const router = express.Router();

router.post("/add", add);
router.get("/getpackage", getpackage);
router.get("/getpackagebyid/:id", getpackagebyID);

module.exports = router;
