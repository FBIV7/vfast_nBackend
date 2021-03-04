const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = mongoose.Schema({
  name: { type: String },
  agreement: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  package: [
    {
      name: String,
      educationCheck: { type: Number },
      addressCheck: { type: Number },
      criminalCheck: { type: Number },
      drugCheck: { type: Number },
      referenceCheck: { type: Number },
      employmentCheck: { type: Number },
      cost: { type: Number },
    },
  ],
  pricing: [
      {
           educationCost: Number,
           addressCost: Number,
           drugCost: Number,
           referenceCost: Number,
           employmentCost: Number,
           criminalCost: Number 
            }
        ],

    CRM:{type: Schema.Types.ObjectId, ref: "User"}
});
module.exports = mongoose.model("Client", ClientSchema);
