package com.littlemixrecipes.littlemix.controllers;

import java.util.List;

import com.littlemixrecipes.littlemix.services.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.webmodels.Recipe;

@Controller
@RequestMapping(path="/create")
public class CreateRecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	@PostMapping(path="/recipe")
	public void createRecipe(@RequestParam Recipe recipeModel) {	
		RecipeEntity recipe = new RecipeEntity();
		
		recipe.setRecipeTitle(recipeModel.getTitle());
		recipe.setCategory(recipeModel.getCategory());
		recipe.setRecipeId(recipeModel.getUserId());
		recipe.setRecipeText(recipeModel.getInstruction());
		recipe.setDescription(recipeModel.getDescription());
		
		List<IngredientsEntity> ingredientsList = recipeModel.getIngredientsList();
		ingredientsList.forEach(e ->{
			
		});
	}
}
