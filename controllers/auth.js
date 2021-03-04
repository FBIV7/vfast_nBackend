const User = require("../models/user");
const path = require("path");
const crypto = require("crypto");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");
var fs = require("fs");


//register route
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;
    // validate
    if (await User.findOne({ email: req.body.email })) {
      return next(new ErrorResponse("user already exist"));
    }
    // console.log(req.body);
    const user = new User(req.body);
  

    await user.save();

    sendTokenResponse(user, 200, res);
  });

  //getme
exports.getMe = asyncHandler(async (req, res, next) => {
  // user is already available in req due to the protect middleware
  const user = await User.findById(req.user.id).select("-password");
  console.log(req.user);
  res.status(200).json({
    user,
  });
});

  // login
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("please provide an email and password"));
    }
  
    // Check for user
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("invalid credential", 400));
    }
    // check if password is match
    const isMatch = await user.matchPassword(password);
  
    if (!isMatch) {
      return next(new ErrorResponse("invalid credential", 401));
    }
    sendTokenResponse(user, 200, res);
  });

  //logout
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      data: {},
    });
  });


  // Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    if (process.env.NODE_ENV === "production") {
      options.secure = true;
    }
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      token,
      user
    });
  };

    //getme
exports.getAllAddress = asyncHandler(async (req, res, next) => {
  // user is already available in req due to the protect middleware
  const user = await User.find({role:"address"}).select("-password");

  res.status(200).json({
    user,
  });
});

//get crm
exports.getAllCRM = asyncHandler(async (req, res, next) => {
  const user = await User.find({role:"CRM"}).select("-password");

  res.status(200).json({
    user,
  });
});