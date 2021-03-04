const express = require("express");
const {
  register,
  login,
  logout,
  getMe,
  getAllAddress,
  getAllCRM,
} = require("../controllers/auth");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.get("/address", getAllAddress);
router.get("/crm", getAllCRM);

module.exports = router;
