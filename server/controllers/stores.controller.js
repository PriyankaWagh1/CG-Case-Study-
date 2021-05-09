const mongoose = require('mongoose');

const Store = mongoose.model('Stores');

module.exports.addStore = (req, res, next) => {
    var store = new Store();
    store.storeImage = req.body.storeImage,
    store.storeName = req.body.storeName
    store.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Store already exists.']);
            else
                return next(err);
        }

    });
}

module.exports.getStore = (req, res)=>{
    Store.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
}

