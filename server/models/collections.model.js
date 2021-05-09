const mongoose = require('mongoose');


var colSchema = new mongoose.Schema({
    colImage:{
        type:String
    },
    colName : {
        type: String,
        unique:true
    }
    
    
},{collection: 'collection'});

module.exports = mongoose.model('Collections', colSchema);

