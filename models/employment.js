const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmploymentSchema = mongoose.Schema({
  caseID: { type: Schema.Types.ObjectId, ref: "Case" },
  operationID: { type: Schema.Types.ObjectId, ref: "User" },
  parentReportID: { type: String },
  ReportID: { type: String },
  name: String,
  mobile: { type: Number },
  alternateMobile: { type: Number },
  email: { type: String },
  fatherName: { type: String },
  motherName: { type: String },
  DOB: { type: String },
  maritialStatus: { type: String },
  nationality: { type: String },
  employerName: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  HRemail: { type: String },
  companyStatus: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  desigination: { type: String },
  employeerCode: { type: Number },
  CTC: { type: String },
  leaving: { type: String },
  superviorName: { type: String },
  superviorEmail: { type: String },
  superviorMobile: { type: String },
  status: {
    type: String,
    enum: ["TL", "employment", "approve", "decline","initiation"],
    default: "TL",

  },
});
module.exports = mongoose.model("Employment", EmploymentSchema);
