const mongoose = require('mongoose');

const Collection = mongoose.model('Collections');

module.exports.addCol = (req, res, next) => {
    var collection = new Collection();
    collection.colImage = req.body.colImage,
    collection.colName = req.body.colName
    collection.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Collection already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getCol = (req, res)=>{
    Collection.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

