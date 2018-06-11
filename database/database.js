var mysql = require('mysql'); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

exports.getRecipeTable = function(req, res)
{
	var result = "";

	con.query('SELECT * FROM recipe', function (error, results, fields) 
	{
	  if (error) throw error;
	  result = JSON.stringify(results);
	  res.send(result);
	});
};
exports.queryRecipe = function(req, res)
{
	var json = req.body;
	var recipeID = (json['recipeID']);
	var query = "SELECT  Ingredient.name, RecipeIngredient.quanity, RecipeIngredient.unit\
 	FROM Recipe\
	INNER JOIN RecipeIngredient ON Recipe.recipeID = RecipeIngredient.recipeID\
    INNER JOIN Ingredient ON RecipeIngredient.ingredientid = Ingredient.ingredientid\
	WHERE Recipe.recipeID = '" + recipeID + "';";

	con.query(query,function(error, results, fields){
		if(error) throw error;
		res.send(JSON.stringify(results));
	});

};
// fisher-yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function getRandomIDs(results)
{
	var count = results[0].count;
		
		var array = [];
		for(i = 0; i < count; i++)
		{
			array.push(i + 1);
		}
		array = shuffle(array);
		array = array.slice(0,5);
		return array;
}
exports.generateMealPlan = function(req,res)
{
	var countQuery = "SELECT count(*) AS count FROM recipe;"
	con.query(countQuery, function(error,results,fields){
		if(error) throw error;
		var IDs = getRandomIDs(results);
		var recipeQuery = "SELECT * FROM Recipe WHERE ";
		for(var i = 0; i < 4; i++){
			recipeQuery = recipeQuery.concat("Recipe.recipeID = '" +IDs[i]+ "' OR ");
		}
		recipeQuery = recipeQuery.concat("Recipe.recipeID = '" + IDs[4] + "';");
		
		con.query(recipeQuery, function(finalError, finalResults, finalFields){
			res.send(JSON.stringify(finalResults));	
		});

	});
};
