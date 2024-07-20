const express = require('express');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes')
require('dotenv').config()
const uploadRoutes = require('./routes/uploadRoutes');
const path = require("path")

const app = express();
const mongoose =require ('mongoose')


app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/upload',uploadRoutes);




mongoose.connect("mongodb+srv://marin:marin@atlascluster.wnza3rf.mongodb.net/project002?retryWrites=true&w=majority&appName=AtlasCluster")
.then((db)=>{
    console.log("database is connected")
})
.catch((error)=>{
    console.error("database connection failed ", error)
})

app.listen(4000, ()=>{
    console.log("server i running");
})