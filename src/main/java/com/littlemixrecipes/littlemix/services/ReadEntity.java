package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.*;
import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class ReadEntity {

    public RecipeEntity readRecipe(RecipeRepository repository, int recipeId){

        RecipeEntity recipe = repository.findOne(recipeId);

        return recipe;
    }

    public IngredientsEntity readIngredients(){
        return null;
    }

    public CommentEntity readComments(){
        return null;
    }

    public GradeEntity readGrade(){
        return null;
    }

    public UserEntity readUser(){
        return null;
    }
}
