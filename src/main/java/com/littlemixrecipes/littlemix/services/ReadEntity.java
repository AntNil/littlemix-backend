package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.*;
import com.littlemixrecipes.littlemix.services.repositories.*;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class ReadEntity {

    //Read one with a specific ID, lets create some more reads as we go ..

    public RecipeEntity readRecipe(RecipeRepository repository, int recipeId){
        RecipeEntity recipe = repository.findOne(recipeId);
        return recipe;
    }

    public IngredientsEntity readIngredients(IngredientsRepository repository, int ingredientsId){
        IngredientsEntity ingredientsEntity = repository.findOne(ingredientsId);
        return ingredientsEntity;
    }

    public CommentEntity readComments(CommentRepository repository, int commentId){
        CommentEntity commentEntity = repository.findOne(commentId);
        return commentEntity;
    }

    public GradeEntity readGrade(GradeRepository repository, int gradeId){
        GradeEntity gradeEntity = repository.findOne(gradeId);
        return gradeEntity;
    }

    public UserEntity readUser(UserRepository repository, int userId){
        UserEntity userEntity = repository.findOne(userId);
        return userEntity;
    }
}
