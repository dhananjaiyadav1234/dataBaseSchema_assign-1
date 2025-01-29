const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    
})

const activitySchema = new mongoose.Schema({
    lastLogin: Date,
})


const  userSchema = new mongoose.Schema({
    userName: {type:String,required,unique:true},
    email: {type:String,required,unique:true},
    password: {type:String,required},
    role: {type:[String]},
    profile: profileSchema,
    activity: activitySchema

    });


