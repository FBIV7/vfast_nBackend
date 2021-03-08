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

  exports.getClients = asyncHandler(async (req, res, next) => {
    const client = await  Client.find({CRM:req.user.id});
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
        educationCost: req.body.educationCost,
        addressCheck: req.body.addressCheck,
        addressCost: req.body.addressCost,
        criminalCheck: req.body.criminalCheck,
        criminalCost: req.body.criminalCost,
        drugCheck: req.body.drugCheck,
        drugCost: req.body.drugCost,
        referenceCheck: req.body.referenceCheck,
        referenceCost: req.body.referenceCost,
        employmentCheck: req.body.employmentCheck,
        employmentCost: req.body.employmentCost,
        cost: req.body.cost
      };
      console.log(package);
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