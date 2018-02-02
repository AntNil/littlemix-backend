package com.littlemixrecipes.littlemix.controllers;

import java.util.List;

import com.littlemixrecipes.littlemix.services.CreateEntity;
import com.littlemixrecipes.littlemix.services.ReadEntity;
import com.littlemixrecipes.littlemix.services.repositories.IngredientsRepository;
import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;
import com.littlemixrecipes.littlemix.services.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.entities.UserEntity;
import com.littlemixrecipes.littlemix.webmodels.Recipe;

@Controller
@RequestMapping(path="/create")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private IngredientsRepository ingredientsRepository;
	
	int currentRecipeId;
	
	@PostMapping(path="/recipe")
	public void createRecipe(@RequestParam Recipe recipeModel) {	
		RecipeEntity recipe = new RecipeEntity();
		CreateEntity create = new CreateEntity();
		
		//copy recipe webmodel and save it to the database
		recipe.setRecipeTitle(recipeModel.getTitle());
		recipe.setCategory(recipeModel.getCategory());
		recipe.setUserId(recipeModel.getUserId());
		recipe.setRecipeText(recipeModel.getInstruction());
		recipe.setDescription(recipeModel.getDescription());
		recipe.setImgURL(recipeModel.getImgURL());
		create.createRecipe(recipeRepository, recipe);
		
		
		//have to find what recipe id the recently created recipe got
		//with given userId and recipeTitle
		ReadEntity read = new ReadEntity();
		UserEntity user = read.readUser(userRepository, recipeModel.getUserId());
		List<RecipeEntity> userRecipeList = user.getRecipeList();
		
		for( RecipeEntity ingredient : userRecipeList){
			if ( ingredient.getRecipeTitle() == recipeModel.getTitle() ) {
				currentRecipeId = ingredient.getRecipeId();
			}
		}
		
		//adds ingredients to the ingredients table with recipeId
		List<IngredientsEntity> ingredientsList = recipeModel.getIngredientsList();
		ingredientsList.forEach(e -> {
			e.setRecipeId(currentRecipeId);
			create.createIngredients(ingredientsRepository, e);
		});
	}
	
}
