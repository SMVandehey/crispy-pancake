var initialQuery;
$(document).ready(function(){
    $.get('/generate', function(data, status){
        bindRecipes(data);
        initialQuery = JSON.parse(data);
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
    $('#new-plan').click(function() {
        location.reload();
    });
});
function bindModal(recipe, recipeID)
{
    $('#modal-table tbody > tr').remove();
    $(".modal-title").text(initialQuery[recipeID - 1].name);
    //$(".modal-pic").attr('src', '/images/food' + (recipeID - 1) + '.jpg')
    $(".modal-description").text(initialQuery[recipeID - 1].description)
    recipe.forEach(function(ingredient)
    {
        var quanity = ingredient.quanity + ' ' + ingredient.unit;
        var name = ingredient.name;
        $("#modal-table").append('<tr>' + 
            '<td>' + quanity + '</td>' +
            '<td>' + name + '</td>' +
            '</tr>');
    });
    $(".modal-instructions").text(initialQuery[recipeID - 1].instructions);
}

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