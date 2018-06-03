var express = require('express');
var database = require('./database/database')

var app = express();
var router = express.Router();
var path = __dirname;
  
app.use('/',router);
router.get('/',function(req, res)
{
  res.sendFile(path + '/views/index.html');
});
router.get('/browse',function(req, res)
{  
	res.sendFile(path + '/views/browse.html');
});
router.get('/getBrowseInfo', function(req,res)
{
	database.getRecipeTable(req, res);
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});

app.listen(3000,function(){
  console.log("Server running at Port 3000");
});  


