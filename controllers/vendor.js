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
exports.vendorGet = asyncHandler(async (req, res, next) => {
  const vendor = await Vendor.find();

  res.status(200).json({
    sucess: true,
    vendor,
  });
});

exports.addPrice = asyncHandler(async (req, res, next) => {
  try {
    const vendor = await Vendor.findById(req.body.id);
    const price = {
      locationName: req.body.locationName,
      areaType: req.body.areaType,
      cost: req.body.cost,
    };
    vendor.price.push(price);
    await vendor.save();
    res.status(200).json({
      sucess: true,
      vendor,
    });
  } catch (error) {
    console.log(error);
  }
  // vendor.price=(req.body.price);
  // // await vendor.save();
});
