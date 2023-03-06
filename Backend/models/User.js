const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
    
  }, 
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String
    
  },
  date: {
    type: Date,
    default: Date.now
  },
  auth_type: {
    type: String,
    
  }


});
module.exports = User = mongoose.model("users", UserSchema);