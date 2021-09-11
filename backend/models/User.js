const mongoose = require('mongoose')

const User = mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    midName: {
        type: String,
        required: true,
    },
    birthDate:{
        type: String,
        required: true,
    
    },
    gender:{
        type:String,
        required: true,

    },

    email: {
        type: String,
        required: true,
    },

})
module.exports=mongoose.model('User', User)