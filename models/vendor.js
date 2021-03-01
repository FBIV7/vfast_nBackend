const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = mongoose.Schema({
  name: String,
  aggrement: { type: Boolean },
  startDate: { type: String },
  endDate: { type: String },
  price:[{ locationName : String, areaType :String, cost:Number  }] ,

});
module.exports = mongoose.model("Vendor", VendorSchema);
