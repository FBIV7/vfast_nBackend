const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = mongoose.Schema({
  name: String,
  educationCheck: { type: Number },
  addressCheck: { type: Number },
  criminalCheck: { type: Number },
  drugCheck: { type: Number },
  referenceCheck: { type: Number },
  employmentCheck: { type: Number },
  cost: { type: Number },
});
module.exports = mongoose.model("Package", PackageSchema);
