const asyncHandler = require("../middleware/async");
const Client = require("../models/client");
const ErrorResponse = require("../utils/errorResponse");

exports.add = asyncHandler(async (req, res, next) => {
    const client = await new Client(req.body);
    await client.save();
    res.status(200).json({
      sucess: true,
      client,
    });
  });

  exports.getClient = asyncHandler(async (req, res, next) => {
    const client = await  Client.find();
    res.status(200).json({
      sucess: true,
      client,
    });
  });

  exports.addPackage = asyncHandler(async (req, res, next) => {
    try {
      const client = await Client.findById(req.body.id);
      const package = {
        name: req.body.name,
        educationCheck: req.body.educationCheck,
        addressCheck: req.body.addressCheck,
        criminalCheck: req.body.criminalCheck,
        drugCheck: req.body.drugCheck,
        referenceCheck: req.body.referenceCheck,
        employmentCheck: req.body.employmentCheck,
        cost: req.body.cost,
      };
      client.package.push(package);
      await client.save();
      res.status(200).json({
        sucess: true,
        client,
      });
    } catch (error) {
      console.log(error);
    }
   
  });