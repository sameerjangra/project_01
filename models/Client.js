const {Schema ,model} = require("mongoose")

const ClientSchema = new Schema({
    projectname:{
        type:String
    },
    Amount:{
        type:Number
    }

}, {timestamps:true})

const Client = model("Client", ClientSchema);
module.exports = Client;
