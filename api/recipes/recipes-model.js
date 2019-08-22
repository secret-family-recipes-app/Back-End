
const db = require('../../data/dbConfig.js');

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipe,
  deleteRecipe,
  updateRecipe
};

async function getRecipes(userId) {
  let tags = await db('recipes')
    .where({'recipes.user_id': userId})
    .join('tags', 'tags.recipe_id', 'recipes.id')
    .select('tags.tag as tags', 'tags.recipe_id');

  let recipes = await db('recipes')
  .where({'recipes.user_id': userId})
  .select('recipes.*')


  await recipes.forEach(recipe => {
    recipe.tags = [];
    tags.forEach(tag => {
      if(recipe.id === tag.recipe_id) {
        console.log(tag)
        recipe.tags.push(tag.tags);
      } else {
        return false;
      }
    });
  });

  console.log(recipes);
  // console.log(tags);


  return recipes;
};

async function getRecipeById(recipeId, userId) {
  const recipe = await db('recipes')
  .where({'recipes.id': recipeId, 'recipes.user_id': userId})
  .first();

  if(recipe) {
    const ingredients = await db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .select('ingredients.name')
    .where({'ingredients.recipe_id': recipeId })
    .map(ingredient => {
      return ingredient.name;
    });

    const instructions = await db('instructions')
      .join('recipes', 'recipes.id', 'instructions.recipe_id')
      .select('instructions.name')
      .where({'instructions.recipe_id': recipeId })
      .map(instruction => {
        return instruction.name;
      });

    const tags = await db('tags')
      .join('recipes', 'recipes.id', 'tags.recipe_id')
      .select('tags.tag')
      .where({'tags.recipe_id': recipeId})
      .map(tag => {
        return tag.tag;
      });

    const result = { ...recipe, ingredients, instructions, tags }
    return result;
  } else {
    return null;
  }
};

async function addRecipe(recipe, userId) {

  const ingredients = recipe.ingredients;
  const instructions = recipe.instructions;
  const tags = recipe.tags;

  const recipeInsert = { user_id: userId, title: recipe.title, source: recipe.source, notes: recipe.notes }
  
  const newRecipe = await db('recipes').insert(recipeInsert);
  console.log(newRecipe);

  ingredients.forEach(async ingredient => {
    ingredientInsert = {name: ingredient, recipe_id: newRecipe[0] }
    await db('ingredients').insert(ingredientInsert)
  });

  instructions.forEach(async instruction => {
    instructionInsert = {name: instruction, recipe_id: newRecipe[0] }
    await db('instructions').insert(instructionInsert)
  });

  tags.forEach(async tag => {
    tagInsert = {tag: tag, recipe_id: newRecipe[0] }
    await db('tags').insert(tagInsert)
  });

  return getRecipes(userId);
}

async function deleteRecipe(recipeId, userId) {
  await db('tags')
    .join('recipes', 'recipes.id', 'tags.recipe_id')
    .where({'tags.recipe_id': recipeId})
    .del();

  await db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .where({'instructions.recipe_id': recipeId})
    .del();

  await db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .where({'ingredients.recipe_id': recipeId})
    .del();
  
  await db('recipes')
    .where({'recipes.id': recipeId})
    .del();

  return getRecipes(userId);
}

async function updateRecipe(recipeId, userId, changes) {
  const recipe = await db('recipes')
    .where({'recipes.id': recipeId, 'recipes.user_id': userId})
    .first();
  
  const originalIngredients = await db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .select('ingredients.*')
    .where({'ingredients.recipe_id': recipeId })
    .map(ingredient => {
      return ingredient.name;
    });

  const originalInstructions = await db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.*')
    .where({'instructions.recipe_id': recipeId })
    .map(instructions => {
      return instructions.name;
  });

  const originalTags = await db('tags')
    .join('recipes', 'recipes.id', 'tags.recipe_id')
    .select('tags.*')
    .where({'tags.recipe_id': recipeId })
    .map(tag => {
      return tag.name;
  });

  const recipeUpdate = { ...recipe, title: changes.title, source: changes.source, notes: changes.notes }
  
  if(recipe) {
    await db('recipes')
      .where({'recipes.id': recipeId})
      .first()
      .update(recipeUpdate);

    if(originalIngredients !== changes.ingredients) {
      console.log('ARRAYS NOT THE SAME');
      await db('ingredients')
      .join('recipes', 'recipes.id', 'ingredients.recipe_id')
      .select('ingredients.*')
      .where({'ingredients.recipe_id': recipeId })
      .del();
    
      changes.ingredients.forEach(async ingredient => {
        ingredientInsert = {name: ingredient, recipe_id: recipeId }
        await db('ingredients').insert(ingredientInsert)
      });
    };

    if(originalInstructions !== changes.instructions) {
      console.log('ARRAYS NOT THE SAME');
      await db('instructions')
      .join('recipes', 'recipes.id', 'instructions.recipe_id')
      .select('instructions.*')
      .where({'instructions.recipe_id': recipeId })
      .del();
    
      changes.instructions.forEach(async instruction => {
        instructionInsert = {name: instruction, recipe_id: recipeId }
        await db('instructions').insert(instructionInsert)
      });
    };

    if(originalTags !== changes.tags) {
      console.log('ARRAYS NOT THE SAME');
      await db('tags')
        .join('recipes', 'recipes.id', 'tags.recipe_id')
        .select('tags.*')
        .where({'tags.recipe_id': recipeId })
        .del();
    
      changes.tags.forEach(async tag => {
        tagInsert = {tag: tag, recipe_id: recipeId }
        await db('tags').insert(tagInsert)
      });
    };

    return getRecipeById(recipeId, userId);
  } else { 
    return null;
  }
};


// {
//   "recipe": {
//       "id": 39,
//       "user_id": 2,
//       "title": "TESTTACO22222222222222222",
//       "source": "granda",
//       "notes": null,
//       "ingredients": [
//           "meat",
//           "goat",
//           "test"
//       ],
//       "instructions": [
//           "step 1 test",
//           "step 2 test2",
//           "step 3 step 3"
//       ],
//       "tags": [
//           "dinnerefgdfgsdf",
//           "mexican"
//       ]
//   }
// }