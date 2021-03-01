const asyncHandler = require("../middleware/async");
const Vendor = require("../models/vendor");
const ErrorResponse = require("../utils/errorResponse");

exports.vendorAdd = asyncHandler(async (req, res, next) => {
  const vendor = await new Vendor(req.body);
  await vendor.save();
  res.status(200).json({
    sucess: true,
    vendor,
  });
});

