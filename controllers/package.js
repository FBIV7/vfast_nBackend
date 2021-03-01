const asyncHandler = require("../middleware/async");
const Package = require("../models/package");
const ErrorResponse = require("../utils/errorResponse");

exports.add = asyncHandler(async (req, res, next) => {
  const package = await new Package(req.body);
  await package.save();
  res.status(200).json({
    sucess: true,
    package,
  });
});

exports.getpackage = asyncHandler(async (req, res, next) => {
  const package = await Package.find();
  res.status(200).json({
    sucess: true,
    package,
  });
});

exports.getpackagebyID = asyncHandler(async (req, res, next) => {
  const package = await Package.findById(req.params.id);
  res.status(200).json({
    sucess: true,
    package,
  });
});
