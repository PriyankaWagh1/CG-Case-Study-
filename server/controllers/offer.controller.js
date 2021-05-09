const mongoose = require('mongoose');

const Offer = mongoose.model('Offer');
//const Brand = mongoose.model('Brand');

module.exports.addOffer = (req, res, next) => {
    var offer = new Offer();
    offer.id=req.body.id;
    offer.status = req.body.status;
    offer.tag = req.body.tag;
    offer.desc = req.body.desc;
    offer.category = req.body.category;
    offer.brand  = req.body.brand,
    offer.stores = req.body.stores,
    offer.date=req.body.date,
    offer.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Offer already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getOffer = (req, res)=>{
    Offer.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

module.exports.getOfferById = (req, res)=>{
    let offer = new Offer(req.body);
    let id = req.params.id;
    Offer.findById(id).then((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

module.exports.updateOffer=(req,res)=>{
    let id = req.params.id;
    Offer.findOneAndUpdate(req.params.id,{$set: req.body},{useFindAndModify:false}).then((docs,error)=>{
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

module.exports.deleteOffer = (req,res)=>{
    let id= req.params.id;
    Offer.findOneAndRemove(req.params.id,{useFindAndModify:false}).then((docs)=>{
        if(docs){
            res.send('Deletion Successful');
        }else{
            res.send(err);
        }
    })
}