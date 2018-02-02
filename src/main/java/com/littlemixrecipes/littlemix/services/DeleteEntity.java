package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.services.repositories.*;

/**
 * Created by jennifergisslow on 2018-02-01.
 */
public class DeleteEntity {

    public void deleteRecipe(RecipeRepository repository, int recipeId){
        repository.delete(recipeId);
    }

    public void deleteIngredients(IngredientsRepository repository, int ingredientsid){
        repository.delete(ingredientsid);
    }

    public void deleteComment(CommentRepository repository, int commentId){
        repository.delete(commentId);
    }

    public void deleteGrade(GradeRepository repository, int gradeId){
        repository.delete(gradeId);
    }

    public void deleteUser(UserRepository repository, int userId){
        repository.delete(userId);
    }

}
