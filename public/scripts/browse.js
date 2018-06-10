var initalQuery;

$(document).ready(function(){

   $.get("/getBrowseInfo", function(data, status){
   		var obj = JSON.parse(data);
   		initalQuery = obj
   		bindRecipies(obj);
   }); 

   $(".show-btn").click(function(event){
   		var id = $(event.target).closest(".card").prop("id");
   		// card ids start at 0, so add 1 to correct it
   		var recipeID = parseInt(id.slice(4)) + 1; 
   		$.post('/getRecipe', {"recipeID": recipeID}, 
   		function(data,status)
   		{
   			bindModal(JSON.parse(data), recipeID);
   		});

   });
}); 
function bindModal(recipe, recipeID)
{
	$('#modal-table tbody > tr').remove();
	$(".modal-title").text(initalQuery[recipeID - 1].name);
	//$(".modal-pic").attr('src', '/images/food' + (recipeID - 1) + '.jpg')
	$(".modal-description").text(initalQuery[recipeID - 1].description)
	recipe.forEach(function(ingredient)
	{
		var quanity = ingredient.quanity + ' ' + ingredient.unit;
		var name = ingredient.name;
		$("#modal-table").append('<tr>' + 
			'<td>' + quanity + '</td>' +
			'<td>' + name + '</td>' +
			'</tr>');
	});
	$(".modal-instructions").text(initalQuery[recipeID - 1].instructions);
}
function bindRecipies(query)
{
	for(i = 0; i < 9; i++)
	{
		var name = query[i].name;
		var description = query[i].description;

		var id = "#card" + i;
		var imagePath = '/images/food' + i + '.jpg';
		var body = $(id).children(".card-body");

		$(id).children(".card-img-top").attr('src', imagePath);
		$(body).children(".card-title").text(name);
		$(body).children(".description").text(description);
	}
}
