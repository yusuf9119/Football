const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    team:{
        required:true,
        type:String
    },
    player:{
        required:true,
        type:String
    },
    league:{
        required:true,
        type:String
    },
    country:{
        required:true,
        type:String
    },
    goals:{
        required:true,
        type:String
    },
    postion:{
        required:true,
        type:String
    },
    assists:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('data',dataschema)