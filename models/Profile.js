const {Schema ,model} = require("mongoose")

const profileSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:Number
    }
    
},{timestamps:true})

const Profile = model("Profile", profileSchema);
module.exports = Profile;