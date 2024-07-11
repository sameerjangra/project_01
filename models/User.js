const {Schema ,model} = require("mongoose")

const userSchema = new Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:Number
    }
},{timestamps:true})

const User = model("User", userSchema);
module.exports = User;

