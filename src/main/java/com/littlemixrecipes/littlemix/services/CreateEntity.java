package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.*;
import com.littlemixrecipes.littlemix.services.repositories.*;

/*Created by jennifergisslow on 2018-02-01.*/
public class CreateEntity {

    public void createRecipe(RecipeRepository repository, RecipeEntity recipeObject){
        repository.save(recipeObject);
    }

    public void createIngredients(IngredientsRepository repository, IngredientsEntity ingredientsObject){
        repository.save(ingredientsObject);
    }

    public void createComment(CommentRepository repository, CommentEntity commentObject){
        repository.save(commentObject);
    }

    public void createGrade(GradeRepository repository, GradeEntity gradeObject){
        repository.save(gradeObject);
    }

    public void createUser(UserRepository repository, UserEntity userObject){
        repository.save(userObject);
    }
}
