package com.littlemixrecipes.littlemix;


import com.littlemixrecipes.littlemix.entities.CommentEntity;
import com.littlemixrecipes.littlemix.entities.GradeEntity;
import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.entities.UserEntity;
import com.littlemixrecipes.littlemix.services.*;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LittlemixApplication {

	public static void main(String[] args) {
		SpringApplication.run(LittlemixApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(RecipeRepository recipeRepository, IngredientsRepository ingredientsRepository, CommentRepository commentRepository, GradeRepository gradeRepository, UserRepository userRepository) {
		return (args) -> {
/*

			//Objects
			RecipeEntity recipeEntity = new RecipeEntity();
			IngredientsEntity ingredientsEntity = new IngredientsEntity();
			CommentEntity commentEntity = new CommentEntity();
			GradeEntity gradeEntity = new GradeEntity();
			UserEntity userEntity = new UserEntity();

			//All the create's working!

			//Create user data
			userEntity.setFirstName("Jennifer");
			userEntity.setLastName("Gisslow");
			userEntity.setEmail("jennifergisslow@test.fake");
			userEntity.setPassword("1234");
			userEntity.setImgURL("imgURL.....");

			//Create recipe data
			recipeEntity.setCategory("Vegetariskt");
			recipeEntity.setRecipeText("Använd gurka som pizzabotten. Gurka som topping. Och pressad gurka som sås");
			recipeEntity.setRecipeTitle("Gurkpizza");
			recipeEntity.setDescription("Bästa pizzan, EVER!!!!!!");
			recipeEntity.setImgURL("imgURL ..... YAAAS!");
			recipeEntity.setUserId(1);


			//Create ingredients data
			ingredientsEntity.setIngredientName("Gurka");
			ingredientsEntity.setAmount("4 st");
			//fix a way to get id in another way ...
			ingredientsEntity.setRecipeId(51);


			//Create comment data
			commentEntity.setCommentText("Sjukt bra recept!!");
			commentEntity.setUserName("Jennifer");
			commentEntity.setCommentDate(new Date());
			//fix a way to get id in another way ...
			commentEntity.setRecipeId(1);


			//Create grade data
			gradeEntity.setGradePoints(5);
			//fix a way to get id in another way ...
			gradeEntity.setRecipeId(1);

			//Create the differents entities
//			createEntity.createUser(userRepository, userEntity);
//			recipeRepository.save(recipeEntity);
//			createEntity.createIngredients(ingredientsRepository, ingredientsEntity);
//			createEntity.createComment(commentRepository, commentEntity);
//			createEntity.createGrade(gradeRepository, gradeEntity);
			



			//All the read by id is working!
			/*

			//Read user;
			userEntity = readEntity.readUser(userRepository, 1);
			System.out.println(userEntity.getFirstName() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");

			//Read Recipe
			recipeEntity = readEntity.readRecipe(recipeRepository, 1);
			System.out.println(recipeEntity.getRecipeTitle() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");


			//Read ingredients
			ingredientsEntity = readEntity.readIngredients(ingredientsRepository, 1);
			System.out.println(ingredientsEntity.getIngredientName() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");

			//Read comments
			commentEntity = readEntity.readComments(commentRepository, 1);
			System.out.println(commentEntity.getCommentText() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");

			//Read Grade
			gradeEntity = readEntity.readGrade(gradeRepository, 1);
			System.out.println(gradeEntity.getGradePoints() + " DET FUNKAR !!!!!!!!!!!");
			System.out.println("//////////////////");

			*/

			//Update user

			//Update recipe

			//Update ingredients

			//Update comment

			//Update grade


/*
			//Delete user
			deleteEntity.deleteUser(userRepository, 1);

			//Delete recipe
			deleteEntity.deleteRecipe(recipeRepository, 1);

			//Delete ingredients
			deleteEntity.deleteIngredients(ingredientsRepository, 1);

			//Delete comment
			deleteEntity.deleteComment(commentRepository, 1);

			//Delete grade
			deleteEntity.deleteGrade(gradeRepository, 1);
			*/

		};
	}

}
