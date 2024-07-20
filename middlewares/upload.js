const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads') 
  },
  filename: function (req,file,cb) {
    cb(null,Date.now() + '-' + Math.round(Math.random() * 1E9))

  }
});

const upload = multer({storage: storage});

module.exports = upload;

