const mongoose = require("mongoose");

const role = new mongoose.Schema({
    name:{
        type: String
    }
  },{collection:'roles'});

module.exports= mongoose.model('Role',role);

