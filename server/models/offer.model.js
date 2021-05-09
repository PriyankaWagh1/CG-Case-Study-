const mongoose = require('mongoose');


var offerSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
    },
    status:{
        type:String,
    },
    tag:{
        type: String
    },
    desc:{
        type: String
    },
    category:{
        type:String
    },
    brand:{
        type:String
    },
    date:{
        type:String
    },
    stores:{
        type: String
    }
    
},{collection:'offers'});



mongoose.model('Offer',offerSchema);