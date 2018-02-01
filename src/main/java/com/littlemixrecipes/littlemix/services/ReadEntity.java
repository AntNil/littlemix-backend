package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class ReadEntity {

    public RecipeEntity readRecipe(RecipeRepository repository, int recipeId){

        RecipeEntity recipe = repository.findOne(recipeId);

        return recipe;
    }
}
