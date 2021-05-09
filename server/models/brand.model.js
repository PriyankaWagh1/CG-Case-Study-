const mongoose = require('mongoose');


var brandSchema = new mongoose.Schema({
    brandImage:{
        type:String
    },
    brandName : {
        type: String,
        unique:true
    }
    
    
},{collection: 'brands'});

module.exports = mongoose.model('Brand', brandSchema);

