const mongoose = require('mongoose');

const Brand = mongoose.model('Brand');

module.exports.addBrand = (req, res, next) => {
    var brand = new Brand();
    brand.brandImage = req.body.brandImage,
    brand.brandName = req.body.brandName
    brand.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Brand already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getBrand = (req, res)=>{
    Brand.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

