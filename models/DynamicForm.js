const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
 name:{type:String},
 formData:{type:mongoose.Schema.Types.Mixed}
},{
  timestamps:true
});

const DynamicModel = mongoose.model("DynamicForm", FormSchema);
module.exports = DynamicModel;
