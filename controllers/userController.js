const Client = require('../models/Client');
const User = require('../models/User');

exports.register = async(req, res)=>{
  const { name, username, password } = req.body;
  const user = new User({ name, username, password });
  await user.save();
  res.json('User registered successfully');
}

exports.findalluser =async(req,res)=>{
    try {
      const data = req.user
      console.log("login user data ", data);
      const users =await User.find();
      if(users.length === 0){
        return res.status(404).json({message:"User Not found"})
      }
      res.status(200).json(users)
    } catch (error) {
      res.status(500).send('Server error');
    }
}

exports.update = async(req,res)=>{
  try {
    const id = req.params.id;
    const userExist =await User.findOne({_id:id})
    if(!userExist){
      return res.status(400).json({message:"User not found"});
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body,{
      new:true
    })
    res.status(201).json(updateUser)
  } catch (error) {
    res.status(500).send('Server error');
  }
}

exports.delete = async(req,res)=>{
  try {
    const id = req.params.id;
    const userExist =await User.findOne({_id:id})
    if(!userExist){
      return res.status(400).json({message:"User not found"});
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({message:"User Deleted Successfully"})
   
  } catch (error) {
    res.status(500).send('Server error');
  }
}

exports.clientauth = async(req, res)=>{
  const { projectname ,amount } = req.body;
  const client = new Client({ projectname,amount });
  await client.save();
  res.json('Access Granted');
}

