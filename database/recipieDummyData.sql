use mydb;

INSERT INTO Recipe (name, description, instructions) VALUES ('Greenbean Brocolli Soup', 
	'Hearty soup with rich creamy textures Perfect for a rainy day.','
    Cut broccoli florets from stems. Peel tough outer skin from stems; trim off fibrous ends. Cut stems into 1/2-inch pieces.\n
    In 4-quart Dutch oven, heat oil and butter over medium-high heat until butter is melted. Add garlic; cook, stirring occasionally, until light brown. Stir in onion and celery; season with salt. Reduce heat to medium-low; cook about 10 minutes, stirring occasionally, until vegetables are tender. \n
    Meanwhile, in small bowl, stir together gremolata ingredients; set aside.\n
    Stir thyme, broccoli stems and broth into soup. Heat to boiling. Cook uncovered over medium heat about 3 minutes. Stir in broccoli florets; cook about 7 minutes, stirring occasionally, until broccoli is very tender. Stir in spinach and lemon peel (spinach will wilt).\n
    In blender, cover and puree soup in small batches. (At this point, soup can be covered and refrigerated up to 1 day or frozen up to 1 month.) Return soup to Dutch oven; reheat over medium-low heat. Stir in cream; season to taste with additional salt and the pepper. \n
    Ladle soup into warm individual soup bowls. Sprinkle 1 tablespoon gremolata onto each serving. Pass remaining gremolata at table.');
INSERT INTO Recipe (name, description, instructions) VALUES ('Breaded Zuccini', 
	'A simple Healthy snack, fan favorite among kids',
    '
    Preheat oven to 425 degrees F (220 degrees C). Line a baking sheet with aluminum foil.\n
    Season zucchini pieces with salt.\n
    Mix panko bread crumbs, Parmesan cheese, and Italian seasoning in a bowl.\n
    Dip zucchini pieces into the beaten eggs and then press into bread crumbs to coat; gently toss between your hands so any bread crumbs that havent stuck can fall away. Arrange breaded zucchini onto the prepared baking sheet in a single layer.\n
    Bake zucchini in preheated oven until golden brown, about 15 minutes.
'
);
INSERT INTO Recipe (name, description) VALUES ('Tomato Basil Pasta', 'A few easy additions to spice up store bought red sauce');
INSERT INTO Recipe (name, description) VALUES ('Fried Tofu', 'Cooked in a spicy thai sauce, a perfect addition to salads and stir-fries');
INSERT INTO Recipe (name, description) VALUES ('Simple Radish Salad','Iceberg lettuce base with dried cranberries and homeade croutons');
INSERT INTO Recipe (name, description) VALUES ('Weeknight Tostada with blackeyed peas', 'Easy Taco Tuesday meal topped with sala and mexican rice');
INSERT INTO Recipe (name, description) VALUES ('Homemade Trail-mix', 'Simple starter recipe that goes well with any stir-ins');
INSERT INTO Recipe (name, description) VALUES ('Asian Stir Fry with Creamy Mushroom Sauce', 'Great recipe to use the last of your summer vegtables including zuccuni and hot peppers');
INSERT INTO Recipe (name, description) VALUES ('Green Broccoli soup','A Hearty dish with rich creamy textures well suited for a rainy day.');

INSERT INTO Ingredient(name) VALUES ('Broccoli');
INSERT INTO Ingredient(name) VALUES ('Olive Oil');
INSERT INTO Ingredient(name) VALUES ('Butter');
INSERT INTO Ingredient(name) VALUES ('garlic');
INSERT INTO Ingredient(name) VALUES ('Onion');
INSERT INTO Ingredient(name) VALUES ('Celery');
INSERT INTO Ingredient(name) VALUES ('Vegtable Broth');
INSERT INTO Ingredient(name) VALUES ('Spinach');
INSERT INTO Ingredient(name) VALUES ('Buttermilk');


INSERT INTO Ingredient(name) VALUES('Zuccini');
INSERT INTO Ingredient(name) VALUES('Parmesan cheese');
INSERT INTO Ingredient(name) VALUES('Eggs');
INSERT INTO Ingredient(name) VALUES ('BreadCrumbs');
INSERT INTO Ingredient(name) VALUES('Italian Seasoning');



INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('1','1', '2', 'lb');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('2','1', '2', 'tbs');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('3','1', '1', 'tbs');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('4','1', '1', 'tbs');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('5','1', '1', 'tbs');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('6','1', '1', 'cup');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('7','1', '5', 'cups');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('8','1', '1', 'cup');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('9','1', '2', 'tbs');

INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('10','2', '3', '');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('11','2', '.25', 'cup');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('12','2', '2', '');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('13','2', '1', 'cup');
INSERT INTO RecipeIngredient(ingredientID, recipeID, quanity, unit) VALUES ('14','2', '2', 'tbs');
