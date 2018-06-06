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
	var query = "select  Ingredient.name, RecipeIngredient.quanity, RecipeIngredient.unit, Recipe.instructions\
 from Recipe\
	INNER JOIN RecipeIngredient ON Recipe.recipeID = RecipeIngredient.recipeID\
    INNER JOIN Ingredient ON RecipeIngredient.ingredientid = Ingredient.ingredientid\
	WHERE Recipe.recipeID = '" + recipeID + "';";

	con.query(query,function(error, results, fields)
	{
		if(error) throw error;
		res.send(JSON.stringify(results));
		console.log(results);
	});

};
