const mongoose = require('mongoose');


var dealsSchema = new mongoose.Schema({
    dealImage:{
        type:String
    },
    dealDes : {
        type: String
    },
    store:{
        type:String,
    },
    price:{
        type:Number,
    }
    
    
},{collection: 'ddeals'});

module.exports = mongoose.model('Deals', dealsSchema);


