const Profile = require('../models/Profile');
const User = require('../models/User');
const jwt = require("jsonwebtoken")


exports.login = async(req, res)=>{
    const { username, password } = req.body;
    const user = await User.findOne({ username, password },);
  
    if (user) {
      console.log(user);
      const token = jwt.sign({id:user._id, name:user.name}, "mysecret", {expiresIn:"300d"})
      res.json({ message:"Login Successfully", username,password,token});
      const data =new Profile({username,password})
      await data.save();
  
    } else {
      res.status(401).send('Invalid credentials');
    }
  }  
