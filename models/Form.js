const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
 formData:{type:mongoose.Schema.Types.Mixed}
},{
  timestamps:true
});

const FormModel = mongoose.model("users", FormSchema);
module.exports = FormModel;
