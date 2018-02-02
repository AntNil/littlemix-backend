package com.littlemixrecipes.littlemix;

import com.littlemixrecipes.littlemix.entities.CommentEntity;
import com.littlemixrecipes.littlemix.entities.GradeEntity;
import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.CreateEntity;
import com.littlemixrecipes.littlemix.services.DeleteEntity;
import com.littlemixrecipes.littlemix.services.ReadEntity;
import com.littlemixrecipes.littlemix.services.repositories.CommentRepository;
import com.littlemixrecipes.littlemix.services.repositories.GradeRepository;
import com.littlemixrecipes.littlemix.services.repositories.IngredientsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;

import java.util.Date;

@SpringBootApplication
public class LittlemixApplication {

	public static void main(String[] args) {
		SpringApplication.run(LittlemixApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(RecipeRepository recipeRepository, IngredientsRepository ingredientsRepository, CommentRepository commentRepository, GradeRepository gradeRepository) {
		return (args) -> {

			//Objects
			CreateEntity createEntity = new CreateEntity();

			RecipeEntity recipeEntity = new RecipeEntity();
			recipeEntity.setCategory("Vegetariskt");
			recipeEntity.setRecipeText("Använd gurka som pizzabotten. Gurka som topping. Och pressad gurka som sås");
			recipeEntity.setRecipeTitle("Gurkpizza");
			recipeEntity.setUserId(1);

			IngredientsEntity ingredientsEntity = new IngredientsEntity();
			ingredientsEntity.setIngredientName("Gurka");
			ingredientsEntity.setAmount("4 st");
			//fix a way to get id in another way ...
			ingredientsEntity.setRecipeId(1);

			CommentEntity commentEntity = new CommentEntity();
			commentEntity.setCommentText("Sjukt bra recept!!");
			commentEntity.setUserName("Jennifer");
			commentEntity.setCommentDate(new Date());
			//fix a way to get id in another way ...
			commentEntity.setRecipeId(1);

			GradeEntity gradeEntity = new GradeEntity();
			gradeEntity.setGradePoints(5);
			//fix a way to get id in another way ...
			gradeEntity.setRecipeId(1);

			//Create the differents entities
			createEntity.createRecipe(recipeRepository, recipeEntity);
			createEntity.createIngredients(ingredientsRepository, ingredientsEntity);

/*
			//Read the different entities
			ReadEntity readEntity = new ReadEntity();
			RecipeEntity recipe = readEntity.readRecipe(repository, 1);
			System.out.println(recipe.getUserName() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");

			//Delete the different entities
			DeleteEntity deleteEntity = new DeleteEntity();
			deleteEntity.deleteRecipe(repository, 2);
			*/
		};
	}

}
