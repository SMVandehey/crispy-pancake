var mysql = require('mysql'); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

function makeConnection()
{

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});
}

exports.createDatabase = function()
{ 
	makeConnection();
}