const asyncHandler = require("../middleware/async");
const Package = require("../models/package");
const Education = require("../models/education");
const Address = require("../models/address");
const Employment = require("../models/employment");
const Reference = require("../models/reference");
const ErrorResponse = require("../utils/errorResponse");
const Case = require("../models/case");

exports.education = asyncHandler(async (req, res, next) => {
  const education = await new Education(req.body);
  const cases = await Case.findById(req.body.caseID);
  cases.educationSubmit = cases.educationSubmit + 1;
  await cases.save();
  await education.save();
  res.status(200).json({
    sucess: true,
    education,
  });
});

exports.getEducation = asyncHandler(async (req, res, next) => {
  const education = await Education.find({ status: req.params.status });

  res.status(200).json({
    sucess: true,
    education,
  });
});

exports.address = asyncHandler(async (req, res, next) => {
  const address = await new Address(req.body);
  address.status = "TL";
  const cases = await Case.findById(req.body.caseID);
  cases.addressSubmit = cases.addressSubmit + 1;
  await cases.save();
  await address.save();
  res.status(200).json({
    sucess: true,
    address,
  });
});

exports.getAddress = asyncHandler(async (req, res, next) => {
  const address = await Address.find({ status: req.params.status });

  res.status(200).json({
    sucess: true,
    address,
  });
});

exports.employment = asyncHandler(async (req, res, next) => {
  const employment = await new Employment(req.body);
  const cases = await Case.findById(req.body.caseID);
  cases.employmentSubmit = cases.employmentSubmit + 1;
  await cases.save();
  await employment.save();
  res.status(200).json({
    sucess: true,
    employment,
  });
});

exports.getEmployment = asyncHandler(async (req, res, next) => {
  const employment = await Employment.find({ status: req.params.status });

  res.status(200).json({
    sucess: true,
    employment,
  });
});

exports.reference = asyncHandler(async (req, res, next) => {
  const reference = await new Reference(req.body);
  const cases = await Case.findById(req.body.caseID);
  cases.referenceSubmit = cases.referenceSubmit + 1;
  await cases.save();
  await reference.save();
  res.status(200).json({
    sucess: true,
    reference,
  });
});

exports.getReference = asyncHandler(async (req, res, next) => {
  const reference = await Reference.find({ status: req.params.status });

  res.status(200).json({
    sucess: true,
    reference,
  });
});
