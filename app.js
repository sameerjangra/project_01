const express = require('express');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes')


const mongoose =require ('mongoose')

const app = express();
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/blogs', blogRoutes);


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