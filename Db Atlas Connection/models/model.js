const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    fristname: {
        type: String,
    }
    ,
    lastname: {
        type: String,
        required: true

    },
    age: {
        type: Number
    }
    ,
    adrees: {
        type: String
    }

})

const userServer = new mongoose.model('userServer', userData);

module.exports = userServer;