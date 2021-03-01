const express = require("express");
const {register,getCases ,getCasesbyID, AddressById, EducationById ,EmploymentByID, ReferenceByID } = require("../controllers/case");

const router = express.Router();

router.post("/register", register)
// router.get("/getpackage", getpackage);
router.get("/getCases", getCases)
router.get("/getcasesbyid/:id", getCasesbyID)
router.post("/addressbyid",AddressById)
router.post("/educationbyid",EducationById)
router.post("/employmentbyid",EmploymentByID)
router.post("/referencebyid",ReferenceByID)


module.exports = router;
