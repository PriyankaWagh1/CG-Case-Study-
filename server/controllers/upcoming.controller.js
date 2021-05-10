const mongoose = require('mongoose');

const Upcoming = mongoose.model('Upcoming');

module.exports.addupoffer = (req, res, next) => {
    var upcoming = new Upcoming();
    upcoming.upImage = req.body.upImage,
    upcoming.upName = req.body.upName,
    upcoming.category = req.body.category,
    upcoming.desc= req.body.desc,
    upcoming.save((err, doc) => {
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

module.exports.getupoffer = (req, res)=>{
    Upcoming.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

