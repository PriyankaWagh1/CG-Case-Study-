const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,  useCreateIndex: true },(err) => {
    if (!err) { console.log('Connection successfully with MongoDB.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

const db={};
require('./user.model');
require('./brand.model');
require('./coupon.model');
require('./offer.model');
require('./collections.model');
require('./stores.model');
require('./upcoming.model');
require('./ddeals.model');
require('./role.model');

db.roles = ["user","admin"];