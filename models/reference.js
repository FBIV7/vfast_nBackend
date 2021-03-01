const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReferenceSchema = mongoose.Schema({
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
  referenceName: { type: String },
  organisationName: { type: String },
  desigination: { type: String },
  referenceID: { type: String },
  referenceMobile: { type: String },
  referenceAlternateMobile: { type: String },
  periodApplicant: { type: String },
  relationApplicant: { type: String },
  status: {
    type: String,
    enum: ["TL", "reference", "approve", "decline"],
    default: "TL",
  },
});
module.exports = mongoose.model("Reference", ReferenceSchema);
