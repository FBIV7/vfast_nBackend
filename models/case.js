const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CaseSchema = mongoose.Schema({
  clientName: { type: String },
  candidateName: { type: String },
  pack: { type: Schema.Types.ObjectId, ref: "Package" },
  status: {
    type: String,
    enum: ["initiation", "saa", "approve", "decline"],
    default: "initiation",
  },
  date: { type: Date, default: Date.now() },
  reportId: { type: String },
  educationSubmit: { type: Number, default: 0 },
  addressSubmit: { type: Number, default: 0 },
  employmentSubmit: { type: Number, default: 0 },
  referenceSubmit: { type: Number, default: 0 },
});
module.exports = mongoose.model("Case", CaseSchema);
