var express = require('express');
var database = require('./database/database')
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var jsonParser = bodyParser.json();

var path = __dirname;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/',router);
router.get('/',function(req, res)
{
  res.sendFile(path + '/views/index.html');
});
router.get('/meal_plan',function(req, res)
{
  res.sendFile(path + '/views/meal_plan.html');
});
router.get('/browse',function(req, res)
{  
	res.sendFile(path + '/views/browse.html');
});
router.get('/getBrowseInfo', function(req,res)
{
	database.getRecipeTable(req, res);
});
router.post('/getRecipe', function(req, res)
{
	database.queryRecipe(req,res);
});
router.get('/generate', function(req,res)
{
	database.generateMealPlan(req,res);
});


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});

app.listen(3000,function(){
  console.log("Server running at Port 3000");
});  


