$(document).ready(function(){
    $.get('/generate', function(data, status){
        bindRecipes(data);
    });
});

function bindRecipes(data)
{
    var result = JSON.parse(data);

    for(i = 0; i < 5; i++)
    {
        var name = result[i].name;
        var description = result[i].description
        var id = result[i].recipeID;

        var cardID = "#card" + i;
        var imagePath = '/images/food' + (id - 1) + '.jpg';
        var body = $(cardID).children(".card-body");

        $(cardID).children(".card-img-top").attr('src', imagePath);
        $(body).children(".card-title").text(name);
        $(body).children(".description").text(description);
    }
}