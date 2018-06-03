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

	con.query('SELECT * FROM recipe', function (error, results, fields) {
	  if (error) throw error;
	  //console.log(results);
	  result = JSON.stringify(results);
	  //console.log("stringifed results:" + result);
	  res.send(result);
	});
};
