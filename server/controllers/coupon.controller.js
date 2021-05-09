const mongoose = require('mongoose');

const Coupon = mongoose.model('Coupon');
//const Brand = mongoose.model('Brand');

module.exports.addCoupon = (req, res, next) => {
    var coupon = new Coupon();
    coupon.couponCode = req.body.couponCode;
    coupon.couponTag = req.body.couponTag;
    coupon.couponDes = req.body.couponDes;
    coupon.category = req.body.category;
    coupon.brand  = req.body.brand,
    coupon.stores = req.body.stores,
    coupon.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Coupon already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getCoupon = (req, res)=>{
    Coupon.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

module.exports.couponById = (req, res)=>{
    let coupon = new Coupon(req.body);
    let id = req.params.id;
    Coupon.findById(id).then((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

module.exports.updateCoupon=(req,res)=>{
   
    let id = req.params.id;
    Coupon.findOneAndUpdate(req.params.id,{$set: req.body},{useFindAndModify:false}).then((docs,error)=>{
        if(docs){
            res.send(docs);
        }
        else{
            res.send(error);
        }
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    })
}


module.exports.deleteCoupon = (req,res)=>{
    let id= req.params.id;
    Coupon.findByIdAndRemove(req.params.id,{useFindAndModify:false}).then((docs)=>{
        if(docs){
            res.send('Deletion Successful');
        }else{
            res.send(err);
        }
    })
}