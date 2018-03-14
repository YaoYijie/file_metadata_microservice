var FileHandler = require(process.cwd() + '/app/controller/fileHandler.client.js');
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

module.exports = function(app) {
  var fileHandler = new FileHandler();
  
  app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  })

  app.post('/file', upload.single('file'), fileHandler.parseFile);
}
