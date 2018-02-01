package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.repositories.IngredientsRepository;
import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class CreateEntity {

    public void createRecipe(RecipeRepository repository, RecipeEntity recipeObject){

        //Useless code?? why have this method than? ........
/*
        RecipeEntity recipe = new RecipeEntity();
        recipe.setRecipeTitle(recipeObject.getRecipeTitle());
        recipe.setCategory(recipeObject.getCategory());
        recipe.setRecipeText(recipeObject.getRecipeText());
        recipe.setUserName(recipeObject.getUserName());
        */
        repository.save(recipeObject);

    }

    public void createIngredients(IngredientsRepository repository, IngredientsEntity ingredientsObject){
        repository.save(ingredientsObject);
    }
}
