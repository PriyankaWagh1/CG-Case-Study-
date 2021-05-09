require('./config/config');
require('./models/db');
require('./config/passportConfig');

//const Brand = require('./models/brand.model');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const port = process.env.PORT || 3000;
const rtsIndex = require('./routes/routes');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(port, () => console.log(`Server started at port : ${port}`));