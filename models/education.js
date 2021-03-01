const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = mongoose.Schema({
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
  certificateName: { type: String },
  educationMode: { type: String },
  degreeName: { type: String },
  specialization: { type: String },
  collegeName: { type: String },
  universityName: { type: String },
  universityLocation: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  registrationNumber: { type: String },
  yearOfPassing: { type: Number },
  grade: { type: String },
  status: {
    type: String,
    enum: ["TL", "education", "approve", "decline", "initiation"],
    default: "TL",
  },
});
module.exports = mongoose.model("Education", EducationSchema);
