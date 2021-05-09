const mongoose = require('mongoose');


var upOfferSchema = new mongoose.Schema({
    upImage:{
        type:String
    },
    upName : {
        type: String,
        
    }
    
    
},{collection: 'upcoming'});

module.exports = mongoose.model('Upcoming', upOfferSchema);

