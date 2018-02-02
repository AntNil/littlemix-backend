package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class DeleteEntity {

    public void deleteRecipe(RecipeRepository repository, int recipeId){
        repository.delete(recipeId);
    }

    public void deleteIngredients(){}

    public void deleteComment(){}

    public void deleteGrade(){}

    public void deleteUser(){}

}
