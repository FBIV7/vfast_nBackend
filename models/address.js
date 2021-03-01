const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = mongoose.Schema({
    caseID: { type: Schema.Types.ObjectId, ref: "Case" },
    operationID: { type: Schema.Types.ObjectId, ref: "User" },
    parentReportID:{type:String},
    ReportID:{type:String},
    name:String,
    mobile:{type:Number},
    alternateMobile:{type:Number},
    email:{type:String},
    fatherName:{type:String},
    motherName:{type:String},
    aadharCard:{type:String},
    passport:{type:String},
    DOB:{type:String},
    maritialStatus:{type:String},
    nationality:{type:String},
    street:{type:String},
    city:{type:String},
    pincode:{type:String},
    state:{type:String},
    landmark:{type:String},
    from:{type:String},
    to:{type:String},
    status: {
        type: String,
        enum: ["TL", "address", "approve", "decline"],
    default: "TL",
       
      },
})
module.exports = mongoose.model("Address", AddressSchema);