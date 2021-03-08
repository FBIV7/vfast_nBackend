const Case = require("../models/case");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Address = require("../models/address");
const Education = require("../models/education");
const Employment = require("../models/employment");
const Reference = require("../models/reference");

exports.register = asyncHandler(async (req, res, next) => {
    const cases = await new Case(req.body);
    cases.status = "initiation"
    await cases.save();
    res.status(200).json({
      sucess: true,
      cases,
    });
  });
  
//get cases
exports.getCases = asyncHandler(async (req, res, next) => {
  
  const cases = await  Case.find({status:req.query.status}).populate("clientName");

  res.status(200).json({
    sucess: true,
    cases,
  });
});

exports.getCasesbyID = asyncHandler(async (req, res, next) => {
  const cases = await Case.findById(req.params.id);
  res.status(200).json({
    sucess: true,
    cases,
  });
});

exports.AddressById = asyncHandler(async (req, res, next) => {
  const cases = await Address.findById(req.body.caseID);
  console.log(cases);
  cases.operationID = req.body.operationID;
  cases.save();
  res.status(200).json({
    sucess: true,
    cases,
  });
});

exports.EducationById = asyncHandler(async (req, res, next) => {
  const cases = await Education.findById(req.body.caseID);
  console.log(cases);
  cases.operationID = req.body.operationID;
  cases.save();
  res.status(200).json({
    sucess: true,
    cases,
  });
});
exports.EmploymentByID = asyncHandler(async (req, res, next) => {
  const cases = await Employment.findById(req.body.caseID);
  console.log(req.body);
  cases.operationID = req.body.operationID;
  cases.save();
  res.status(200).json({
    sucess: true,
    cases,
  });
});
exports.ReferenceByID = asyncHandler(async (req, res, next) => {
  const cases = await Reference.findById(req.body.caseID);
  console.log(req.body);
  cases.operationID = req.body.operationID;
  cases.save();
  res.status(200).json({
    sucess: true,
    cases,
  });
});

