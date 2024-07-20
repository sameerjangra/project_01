const express = require('express');
const router = express.Router();
const cloudinary = require("../models/upload");
const upload = require("../middlewares/upload");
const fs = require("fs")

 router.post('/upload', upload.single('image'), async function (req, res) {
  console.log("file ", req.file);
  const filePath = req.file.path
  let secure_url
try {
  await cloudinary.uploader.upload(req.file.path, function (err, result){
    if(err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error"
      })
    }
    console.log("url ", result.secure_url)
    secure_url = result.secure_url
    return res.status(200).json({
      success: true,
      message:"Uploaded!",
      data: result.secure_url
    })
  })
} catch (error) {
  console.log("image uploading error ", error);
  return res.status(500).json({
    success: false,
    message: "Error"
  })
  
} finally {
  console.log("file path: ", filePath);
  console.log("secure url: ", secure_url);
  if(filePath && secure_url){
    try {
      console.log("image path ", filePath);
       fs.unlink(filePath, (error) => {
        if(error){
          console.log(error);
        }
        console.log("file deleted successfully");
      })
    } catch (error) {
      console.log("image deleting error ", error);
      console.log(error);
    }
  }
}
 
});

module.exports = router;
