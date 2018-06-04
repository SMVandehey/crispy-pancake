$(document).ready(function(){

   $.get("/getBrowseInfo", function(data, status){
   		var obj = JSON.parse(data);
   		bindRecipies(obj);
   }); 

}); 

function bindRecipies(query)
{
	for(i = 0; i < 9; i++)
	{
		var name = query[i].name;
		var description = query[i].description;

		var id = "#card" + i;
		var body = $(id).children(".card-body");
		$(body).children(".card-title").text(name);
		$(body).children(".description").text(description);
	}
}