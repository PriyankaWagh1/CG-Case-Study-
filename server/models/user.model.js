const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Firstname can\'t be empty',
    },
    lastname: {
        type: String,
        required: 'Lastname can\'t be empty',
    },
    username: {
        type: String,
        required: `Username can't be empty`,
        unique: true
    },
    password: {
        type: String,
        required: `Password can't be empty`,
        minlength: [5, 'Password must be atleast 5 character long']
    }
    
});

// Custom validation for 
userSchema.path('username').validate((val) => {
    userRegex = /^[a-zA-Z\d]+$/i;
    return userRegex.test(val);
}, 'Username can\'t have special characters.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User', userSchema);