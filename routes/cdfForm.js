const express = require("express");
const {
  education,
  address,
  employment,
  reference,
  getEducation,
  getAddress,
  getEmployment,
  getReference,
} = require("../controllers/cdfForm");

const router = express.Router();

router.post("/education", education);
router.get("/education/:status", getEducation);
router.post("/address", address);
router.get("/address/:status", getAddress);
router.post("/employment", employment);
router.get("/employment/:status", getEmployment);
router.post("/reference", reference);
router.get("/reference/:status", getReference);
// router.get("/getpackage", getpackage);
// router.get("/getCases", getCases);

module.exports = router;
