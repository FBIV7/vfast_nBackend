const express = require("express");
const {
  register,
  login,
  logout,
  getMe,getAllAddress
} = require("../controllers/auth");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");



router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.get("/address",  getAllAddress);

module.exports = router;
