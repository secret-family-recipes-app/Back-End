const db = require('../../data/dbConfig.js');

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipe,
  deleteRecipe,
  updateRecipe
};

async function getRecipes(userId) {
  let tags = await db('tags')
    .where({ 'recipes.user_id': userId })
    .join('recipes', 'tags.recipe_id', 'recipes.id')
    .select('tags.id', 'tags.tag', 'tags.recipe_id')
    .orderBy('tags.id', 'asc');

  let ingredients = await db('ingredients')
    .where({ 'recipes.user_id': userId })
    .join('recipes', 'ingredients.recipe_id', 'recipes.id')
    .select('ingredients.*')
    .orderBy('ingredients.id', 'asc');

  let instructions = await db('instructions')
    .where({ 'recipes.user_id': userId })
    .join('recipes', 'instructions.recipe_id', 'recipes.id')
    .select('instructions.id', 'instructions.name', 'instructions.recipe_id')
    .orderBy('instructions.id', 'asc');

  let recipes = await db('recipes')
    .where({ 'recipes.user_id': userId })
    .select('recipes.*')
    .orderBy('recipes.id', 'desc');

  await recipes.forEach(recipe => {
    recipe.tags = [];
    recipe.ingredients = [];
    recipe.instructions = [];

    tags.forEach(tag => {
      if (recipe.id === tag.recipe_id) {
        recipe.tags.push(tag.tag);
      } else {
        return false;
      }
    });

    ingredients.forEach(ingredient => {
      if (recipe.id === ingredient.recipe_id) {
        recipe.ingredients.push(ingredient.name);
      } else {
        return false;
      }
    });

    instructions.forEach(instruction => {
      if (recipe.id === instruction.recipe_id) {
        recipe.instructions.push(instruction.name);
      } else {
        return false;
      }
    });

  });

  console.log(recipes);

  return recipes;
}

async function getRecipeById(recipeId, userId) {
  const recipe = await db('recipes')
    .where({ 'recipes.id': recipeId, 'recipes.user_id': userId })
    .first();

  if (recipe) {
    const ingredients = await db('ingredients')
      .join('recipes', 'recipes.id', 'ingredients.recipe_id')
      .select('ingredients.name')
      .where({ 'ingredients.recipe_id': recipeId })
      .map(ingredient => {
        return ingredient.name;
      });

    const instructions = await db('instructions')
      .join('recipes', 'recipes.id', 'instructions.recipe_id')
      .select('instructions.name')
      .where({ 'instructions.recipe_id': recipeId })
      .map(instruction => {
        return instruction.name;
      });

    const tags = await db('tags')
      .join('recipes', 'recipes.id', 'tags.recipe_id')
      .select('tags.tag')
      .where({ 'tags.recipe_id': recipeId })
      .map(tag => {
        return tag.tag;
      });

    const result = { ...recipe, ingredients, instructions, tags };
    return result;
  } else {
    return null;
  }
}

async function addRecipe(recipe, userId) {
  const ingredients = recipe.ingredients;
  const instructions = recipe.instructions;
  const tags = recipe.tags;

  const recipeInsert = {
    user_id: userId,
    title: recipe.title,
    source: recipe.source,
    notes: recipe.notes
  };
  const newRecipe = await db('recipes')
    .insert(recipeInsert)
    .returning('id');

  ingredients.forEach(async ingredient => {
    ingredientInsert = { name: ingredient, recipe_id: newRecipe[0] };
    console.log(ingredientInsert);
    await db('ingredients').insert(ingredientInsert);
  });

  for (instruction of instructions) {
    instructionInsert = { name: instruction, recipe_id: newRecipe[0] };
    await db('instructions').insert(instructionInsert);
  }

  // instructions.forEach(async instruction => {
  //   instructionInsert = { name: instruction, recipe_id: newRecipe[0] };
  //   await db('instructions').insert(instructionInsert);
  // });

  tags.forEach(async tag => {
    tagInsert = { tag: tag, recipe_id: newRecipe[0] };
    await db('tags').insert(tagInsert);
  });

  return getRecipes(userId);
}

async function deleteRecipe(recipeId, userId) {
  await db('tags')
    .join('recipes', 'recipes.id', 'tags.recipe_id')
    .where({ 'tags.recipe_id': recipeId })
    .del();

  await db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .where({ 'instructions.recipe_id': recipeId })
    .del();

  await db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .where({ 'ingredients.recipe_id': recipeId })
    .del();

  await db('recipes')
    .where({ 'recipes.id': recipeId })
    .del();

  return getRecipes(userId);
}

async function updateRecipe(recipeId, userId, changes) {
  const recipe = await db('recipes')
    .where({ 'recipes.id': recipeId, 'recipes.user_id': userId })
    .first();

  const originalIngredients = await db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .select('ingredients.*')
    .where({ 'ingredients.recipe_id': recipeId })
    .map(ingredient => {
      return ingredient.name;
    });

  const originalInstructions = await db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.*')
    .where({ 'instructions.recipe_id': recipeId })
    .map(instructions => {
      return instructions.name;
    });

  const originalTags = await db('tags')
    .join('recipes', 'recipes.id', 'tags.recipe_id')
    .select('tags.*')
    .where({ 'tags.recipe_id': recipeId })
    .map(tag => {
      return tag.name;
    });

  const recipeUpdate = {
    ...recipe,
    title: changes.title,
    source: changes.source,
    notes: changes.notes
  };

  if (recipe) {
    await db('recipes')
      .where({ 'recipes.id': recipeId })
      .first()
      .update(recipeUpdate);

    if (originalIngredients !== changes.ingredients) {
      console.log('ARRAYS NOT THE SAME');
      await db('ingredients')
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .select('ingredients.*')
        .where({ 'ingredients.recipe_id': recipeId })
        .del();

      changes.ingredients.forEach(async ingredient => {
        ingredientInsert = { name: ingredient, recipe_id: recipeId };
        await db('ingredients')
          .insert(ingredientInsert)
          .returning('id');
      });
    }

    if (originalInstructions !== changes.instructions) {
      console.log('ARRAYS NOT THE SAME');
      await db('instructions')
        .join('recipes', 'recipes.id', 'instructions.recipe_id')
        .select('instructions.*')
        .where({ 'instructions.recipe_id': recipeId })
        .del();

      changes.instructions.forEach(async instruction => {
        instructionInsert = { name: instruction, recipe_id: recipeId };
        await db('instructions')
          .insert(instructionInsert)
          .returning('id');
      });
    }

    if (originalTags !== changes.tags) {
      console.log('ARRAYS NOT THE SAME');
      await db('tags')
        .join('recipes', 'recipes.id', 'tags.recipe_id')
        .select('tags.*')
        .where({ 'tags.recipe_id': recipeId })
        .del();

      changes.tags.forEach(async tag => {
        tagInsert = { tag: tag, recipe_id: recipeId };
        await db('tags')
          .insert(tagInsert)
          .returning('id');
      });
    }

    return getRecipeById(recipeId, userId);
  } else {
    return null;
  }
}

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
