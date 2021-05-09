const mongoose = require('mongoose');

const Deals = mongoose.model('Deals');

module.exports.addDeal = (req, res, next) => {
    var deal = new Deals();
    deal.dealImage = req.body.dealImage,
    deal.dealDes = req.body.dealDes,
    deal.store = req.body.store,
    deal.price = req.body.price,
    deal.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Deal already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getDeal = (req, res)=>{
    Deals.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

