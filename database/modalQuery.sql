use mydb;
select  Recipe.recipeID, Recipe.name, Recipe.description, Recipe.instructions,
		RecipeIngredient.quanity, RecipeIngredient.unit,
        Ingredient.name
 from Recipe 
	INNER JOIN RecipeIngredient ON Recipe.recipeID = RecipeIngredient.recipeID
    INNER JOIN Ingredient ON RecipeIngredient.ingredientid = Ingredient.ingredientid
	WHERE Recipe.recipeID = '1';
