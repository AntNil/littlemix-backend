package com.littlemixrecipes.littlemix.controllers;

import java.util.ArrayList;
import java.util.List;

import com.littlemixrecipes.littlemix.services.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.webmodels.Recipe;

@Controller
@RequestMapping(path="/create")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	int currentRecipeId;
	
	@PostMapping(path="/recipe")
	public void createRecipe(@RequestParam Recipe recipeModel) {	
		RecipeEntity recipe = new RecipeEntity();
		
		//copy recipe webmodel and save it to the database as a RecipeEntity
		recipe.setRecipeTitle(recipeModel.getTitle());
		recipe.setCategory(recipeModel.getCategory());
		recipe.setUserId(recipeModel.getUserId());
		recipe.setRecipeText(recipeModel.getInstruction());
		recipe.setDescription(recipeModel.getDescription());
		recipe.setImgURL(recipeModel.getImgURL());
		recipe.setIngredientsList(recipeModel.getIngredientsList());
		recipeRepository.save(recipe);
	}
	
	@GetMapping(path="/getRecipe")
	public RecipeEntity getRecipe(int recipeId ){
		return recipeRepository.findOne(recipeId);
	}
	
	@GetMapping(path="/getAllRecipesWithUserId")
	public List<RecipeEntity> getAllRecipesWithUserId(String userId) {
		List<RecipeEntity> recipeList = new ArrayList();
		recipeRepository.findAll().forEach(e ->{
			recipeList.add(e);
		});
		return recipeList;
		
	}
}
