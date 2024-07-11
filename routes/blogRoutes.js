const express = require('express');
const blogHandler = require('../controllers/blogController');
const router = express.Router();
const Blog = require('../models/Blog')


router.post('/', blogHandler.createBlog);
router.get('/users/:userId',blogHandler.getBlogsByUserId);




router.get('/search', async (req, res) => {
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
  });
  
module.exports = router;

