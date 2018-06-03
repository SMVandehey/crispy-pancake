var mysql = require('mysql'); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

function getRecipeTable()
{

	con.query('SELECT * FROM recipe', function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});

	return JSON.stringify(results);
}
exports.recipe = function()
{
	;
}