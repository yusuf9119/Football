const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    team:{
        required:true,
        type:String
    },
    player:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('data',dataschema)