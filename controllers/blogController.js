const Blog = require('../models/Blog'); // Adjust the path as necessary

exports.createBlog = async (req, res) => {
  const { title, content, userId } = req.body;
  const blog = new Blog({ title, content, userId });
  await blog.save();
  res.send('Blog created successfully');
}

exports.getBlogsByUserId = async(req, res)=>{
  const { userId } = req.params;
  try {
    const blogs = await Blog.find({ userId });

    res.json(blogs);
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
    const updateUser = await User.findbyIdAndUpdate(id, req.body,{
      new:true
    })
    res.status(201).json(updateUser)
  } catch (error) {
    res.status(500).send('Server error');
  }
}

exports.search = async (req, res) => {
  const searchTerm = req.query.q;

  try {
    const blogs = await Blog.find({  $or: [
      { tweet: { $regex: searchTerm, $options: 'i' } },
      { img: { $regex: searchTerm, $options: 'i' } }
    ] });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.findBlogsWithUsers = async (req, res)=>{
  try {
    const result = await Blog.aggregate([
      {
        $lookup:{

        }
      }
    ])
  } catch (error) {
    console.log(error)
  }
}



