const mongoose = require('mongoose');


var couponSchema = new mongoose.Schema({
    couponCode:{
        type:String,
        unique:true
    },
    couponTag:{
        type: String
    },
    couponDes:{
        type: String
    },
    category:{
        type:String
    },
    brand:{
        type:String
    },
    stores:{
        type: String
    }
    
},{collection:'coupons'});

// couponSchema.path('couponCode').validate((val) => {
//     couponRegex = /^[a-zA-Z\d]+$/i;
//     return couponRegex.test(val);
// }, 'Coupon can\'t have special characters.');

mongoose.model('Coupon',couponSchema);