const mongoose = require('mongoose');


var storeSchema = new mongoose.Schema({
    storeImage:{
        type:String
    },
    storeName : {
        type: String,
        unique:true
    }
    
    
},{collection: 'stores'});

module.exports = mongoose.model('Stores', storeSchema);

