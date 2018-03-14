// var multer = require('multer');
// var upload = multer({dest: 'uploads/'});

function fileHandler() {
  this.parseFile = function(req, res, next) {
    var file = req.file;
    var filename = file.originalname;
    var fileSize = file.size;
    var obj = {
      filename: filename,
      size: fileSize
    };
    console.log(obj);
    res.json(obj)
  };
}

module.exports = fileHandler;
